import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConfing.js";
import cors from "cors";
import userRouter from "./Routes/auth.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth/v1", userRouter);
const PORT = process.env.PORT || 8080;
const hostname = process.env.hostname || "localhost";

app.listen(PORT, hostname, () => {
  console.log(`server is running on http:/${hostname}:${PORT}`);
  dbConnect();
});
