import { Request, Response } from "express";
import { FoodOrderItem } from "../models/foodOrderItems.model.js";

export const getAllFoodOrderItems = async (req: Request, res: Response) => {
  const foodOrderItem = await FoodOrderItem.find().populate("food");

  res.json({
    success: true,
    data: foodOrderItem,
  });
};
export const createFoodOrderItem = async (req: Request, res: Response) => {
  const foodOrderItem = req.body;
  const createdFoodOrderItem = await FoodOrderItem.create(foodOrderItem);

  res.json({
    success: true,
    data: createdFoodOrderItem,
  });
};
export const updateFoodOrderItem = async (req: Request, res: Response) => {
  try {
    const { foodOrderItemId } = req.params;
    const updatedFoodOrderItem = req.body;

    const newFoodOrder = await FoodOrderItem.findByIdAndUpdate(
      foodOrderItemId,
      updatedFoodOrderItem,
      {
        new: true,
      }
    )
      .populate("foodOrderItems")
      .populate("user");
    res.json({
      success: true,
      data: newFoodOrder,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const deleteFoodOrderItem = async (req: Request, res: Response) => {
  try {
    const { foodOrderItemId } = req.params;

    const deletedFoodOrderItem = await FoodOrderItem.findByIdAndDelete(
      foodOrderItemId
    );
    res.json({
      success: true,
      data: deletedFoodOrderItem,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
