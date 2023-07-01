import express from "express";
import cookieParser from "cookie-parser";
//  path is a node module that helps us with file paths
import path from "path";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

app.use(express.static(path.resolve("./frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./frontend/public/index.html"));
});
