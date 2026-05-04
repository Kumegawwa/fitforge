import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class WorkoutController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { userId, muscleGroup, exercise, sets, reps, weightKg } = req.body;
      const workout = await prisma.workout.create({
        data: { userId, muscleGroup, exercise, sets, reps, weightKg }
      });
      res.status(201).json(workout);
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar treino" });
    }
  }

  static async listByUser(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    const workouts = await prisma.workout.findMany({ where: { userId } });
    res.json(workouts);
  }
}
