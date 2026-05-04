import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: 'Token não fornecido' });
    return;
  }

  const [, token] = authHeader.split(' ');

  try {
    // Usando uma secret key padrão para ambiente de desenvolvimento
    jwt.verify(token, process.env.JWT_SECRET || 'secret_fitforge_2026');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
};