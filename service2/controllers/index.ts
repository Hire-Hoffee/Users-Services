import { prisma } from "../database/db";
import type { NextFunction, Request, Response } from "express";

const getActions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, pageNum } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const result = await prisma.history.findMany({
      where: { userId: Number(userId) },
      skip: pageNum ? (Number(pageNum) - 1) * 10 : 0,
      take: 10,
    });

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createAction = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, action }: { userId: number; action: string } = req.body;

    if (!userId || !action) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const result = await prisma.history.create({ data: { userId, action } });

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getActions, createAction };
