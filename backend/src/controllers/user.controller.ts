import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { log } from "console";

export const users = async (request: Request, response: Response) => {
  const user = await User.find();
  console.log(user);

  response.json({
    success: true,
    data: user,
  });
};

export const signIn = async (request: Request, response: Response) => {
  try {
    const { name, password } = request.body;

    const user = await User.findOne({ name });

    const comparedPassword = bcrypt.compare(password, user?.password || "");
    const token = jwt.sign({ userId: user?.id }, "batka");
    if (!comparedPassword) {
      response.status(200).json({
        success: false,
        message: "not Authenticated",
      });
    }
    response.status(200).json({
      success: true,
      message: "authenticated",
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;
  try {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      address: address,
    });
    res.status(200).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    res.status(404).json({
      succes: false,
      error: error,
    });
  }
};
