import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
