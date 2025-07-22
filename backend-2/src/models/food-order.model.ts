import mongoose, { Types } from "mongoose";
import { Food } from "./food.model.js";
import { FoodOrderItem } from "./foodOrderItems.model.js";

const { Schema, model } = mongoose;

const foodOrder = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  totalPrice: Number,
  foodOrderItems: [
    {
      type: Schema.ObjectId,
      ref: FoodOrderItem,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrder);
