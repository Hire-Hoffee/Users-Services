import { prisma } from "../database/db";
import type { Request, Response } from "express";

const getActions = async (req: Request, res: Response) => {
  try {
    const { userId, pageNum } = req.query;

    const result = await prisma.history.findMany({
      where: { userId: Number(userId) },
      skip: Number(pageNum) ? (Number(pageNum) - 1) * 10 : 0,
      take: 10,
    });

    return res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createAction = async (req: Request, res: Response) => {
  try {
    const { userId, action }: { userId: number; action: string } = req.body;

    const result = await prisma.history.create({ data: { userId, action } });

    return res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getActions, createAction };
