import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user_route.js";
import authRoutes from "./routes/auth_route.js";
import { errorHandler } from "./middleware/error.js";
dotenv.config();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("The server is listening on port 5000");
});
