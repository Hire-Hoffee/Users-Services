import { prisma } from "../database/db.js";
import { sendAction } from "../axios/index.js";

const getUsers = async (req, res, next) => {
  try {
    const result = await prisma.user.findMany();

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const result = await prisma.user.create({ data: { email, name } });
    await sendAction({ userId: result.id, action: "user created" });

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { email, newName, newEmail } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const result = await prisma.user.update({
      where: { email },
      data: { name: newName, email: newEmail },
    });
    await sendAction({ userId: result.id, action: "user updated" });

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getUsers, createUser, updateUser };
