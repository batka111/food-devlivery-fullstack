import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    address: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: Boolean,
  },
  { timestamps: true }
);

export const User = model("User", user);
