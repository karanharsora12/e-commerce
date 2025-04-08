import prisma from "../config/prisma.js";

export const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const image = req.file ? `/uploads/${req.file.originalname}` : "";
  const product = await prisma.product.create({
    data: {
      name,
      price: Number(price),
      description,
      image,
    },
  });
  res.status(201).json({
    success: true,
    data: product,
  });
};

export const getProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).json({
    success: true,
    data: products,
  });
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id },
  });

  res.status(200).json({
    success: true,
    data: product,
  });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const exist = await prisma.product.findUnique({
    where: { id },
  });
  if (!exist) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  const image = req.file ? `/uploads/${req.file.originalname}` : exist.image;
  const product = await prisma.product.update({
    where: { id },
    data: { name, price: Number(price), description, image },
  });
  res.status(200).json({
    success: true,
    data: product,
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: { id },
  });
  res.status(200).json({
    success: true,
    message: product,
  });
};
