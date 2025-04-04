import prisma from "../config/prisma.js";

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({
    success: true,
    data: users,
  });
};
