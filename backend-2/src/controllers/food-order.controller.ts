import { Request, Response } from "express";
import { FoodOrder } from "../models/food-order.model.js";

export const getAllOrders = async (request: Request, response: Response) => {
  try {
    const foodOrder = await FoodOrder.find()
      .populate("user")
      .populate({
        path: "foodOrderItems",
        populate: { path: "food", populate: { path: "category" } },
      });

    response.json({
      success: true,
      data: foodOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getAllOrdersById = async (
  request: Request,
  response: Response
) => {
  try {
    const { orderId } = request.params; // 6853b667726e33f014c6f024
    const order = await FoodOrder.findById(orderId);

    response.json({
      success: true,
      data: order,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createOrder = async (request: Request, response: Response) => {
  try {
    const order = request.body;
    const createdOrder = await FoodOrder.create(order);

    response.json({
      success: true,
      data: createdOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const updateOrder = async (request: Request, response: Response) => {
  try {
    const { orderId } = request.params;
    const updatedOrder = request.body;

    const order = await FoodOrder.findByIdAndUpdate(orderId, updatedOrder, {
      new: true,
    });

    response.json({
      success: true,
      data: order,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const deleteOrder = async (request: Request, response: Response) => {
  try {
    const { orderId } = request.params;
    console.log(orderId);

    const deletedOrder = await FoodOrder.findByIdAndDelete(orderId);

    response.json({
      success: true,
      data: deletedOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
