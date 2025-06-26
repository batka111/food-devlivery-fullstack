import express from "express";
import {
  createFoodOrderItem,
  deleteFoodOrderItem,
  getAllFoodOrderItems,
  updateFoodOrderItem,
} from "../controllers/foodOrderItems.controller.js";

const foodOrderItemRouter = express.Router();

foodOrderItemRouter.get("/", getAllFoodOrderItems);
foodOrderItemRouter.post("/", createFoodOrderItem);
foodOrderItemRouter.patch("/:foodOrderItemId", updateFoodOrderItem);
foodOrderItemRouter.delete("/:foodOrderItemId", deleteFoodOrderItem);

export default foodOrderItemRouter;
