import mongoose from "mongoose";
import { Food } from "./food.model.js";

const { Schema, model } = mongoose;

const foodOrderItem = new Schema({
  food: {
    type: Schema.ObjectId,
    ref: Food,
  },
  quantity: { type: Number, required: true },
});

export const FoodOrderItem = model("FoodOrderItem", foodOrderItem);
