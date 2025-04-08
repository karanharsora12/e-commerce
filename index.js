import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.route.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
