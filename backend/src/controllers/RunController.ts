import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class RunController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { userId, distanceKm, timeMinutes, date } = req.body;
      const run = await prisma.runHistory.create({
        data: { userId, distanceKm, timeMinutes, date: new Date(date) }
      });
      res.status(201).json(run);
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar corrida" });
    }
  }

  static async listByUser(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    const runs = await prisma.runHistory.findMany({ where: { userId } });
    res.json(runs);
  }
}
