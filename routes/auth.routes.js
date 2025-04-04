import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

// Register a new user
router.post("/register", register);
router.post("/login", login);

export default router;
