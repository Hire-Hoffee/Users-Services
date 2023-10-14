import { prisma } from "../database/db.js";

const getUsers = async (req, res) => {
  try {
    const result = await prisma.user.findMany();

    return res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    const result = await prisma.user.create({ data: { email, name } });

    return res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, newName, newEmail } = req.body;

    const result = await prisma.user.update({
      where: { email },
      data: { name: newName, email: newEmail },
    });

    return res.json(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getUsers, createUser, updateUser };
