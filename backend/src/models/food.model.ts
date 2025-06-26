import mongoose, { Types } from "mongoose";
import { foodCategories } from "./food-category.model.js";

const { Schema, model } = mongoose;

const food = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: String,
  ingredients: String,
  category: {
    type: Schema.ObjectId,
    ref: foodCategories,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const Food = model("Food", food);
