import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  console.log(req.body); // Add this line to log the request body

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password });
  try {
    await newUser.save();
    res.status(201).json("Saved Successfully");
  } catch (error) {
    console.error("Error during signup:", error);
    next(error);
  }
};
