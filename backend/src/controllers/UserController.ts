import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class UserController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      const userExists = await prisma.user.findUnique({ where: { email } });
      if (userExists) {
        res.status(400).json({ error: 'Usuário já existe' });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 8);
      const user = await prisma.user.create({
        data: { name, email, password: hashedPassword }
      });

      res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return;
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        res.status(401).json({ error: 'Senha incorreta' });
        return;
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret_fitforge_2026', {
        expiresIn: '1d'
      });

      res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (error) {
      res.status(500).json({ error: 'Erro no login' });
    }
  }
}