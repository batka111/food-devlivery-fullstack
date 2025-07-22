import express from "express";

import {
  createHool,
  getAllHools,
  deleteFoodCategory,
  updateFoodCategory,
  getFoodByid,
} from "../controllers/category.controller.js";

const foodsRouterCategory = express.Router();

foodsRouterCategory.get("/", getAllHools);
foodsRouterCategory.post("/", createHool);
foodsRouterCategory.patch("/:categoryId", updateFoodCategory);
foodsRouterCategory.delete("/:categoryId", deleteFoodCategory);
foodsRouterCategory.get("/:categoryId", getFoodByid);

export default foodsRouterCategory;
