import express from "express";

import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getAllOrdersById,
  updateOrder,
} from "../controllers/food-order.controller.js";

const ordersRouterCategory = express.Router();

ordersRouterCategory.get("/", getAllOrders);
ordersRouterCategory.post("/", createOrder);
ordersRouterCategory.patch("/:orderId", updateOrder);
ordersRouterCategory.delete("/:orderId", deleteOrder);
ordersRouterCategory.get("/:orderId", getAllOrdersById);

export default ordersRouterCategory;
