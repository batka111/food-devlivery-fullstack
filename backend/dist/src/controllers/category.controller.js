import { foodCategories } from "../models/food-category.model.js";
export const getAllHools = async (request, response) => {
    try {
        const foods = await foodCategories.find();
        response.json({
            success: true,
            data: foods,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
};
export const getFoodByid = async (request, response) => {
    try {
        const { foodId } = request.params; // 6853b667726e33f014c6f024
        const food = await foodCategories.findById(foodId);
        response.json({
            success: true,
            data: food,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
};
export const createHool = async (request, response) => {
    try {
        const food = request.body;
        const createdFood = await foodCategories.create(food);
        response.json({
            success: true,
            data: createdFood,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
};
export const updateFoodCategory = async (request, response) => {
    try {
        const { categoryId } = request.params;
        const updatedFood = request.body;
        const food = await foodCategories.findByIdAndUpdate(categoryId, updatedFood, {
            new: true,
        });
        response.json({
            success: true,
            data: food,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
};
export const deleteFoodCategory = async (request, response) => {
    try {
        const { categoryId } = request.params;
        console.log(categoryId);
        const deletedFood = await foodCategories.findByIdAndDelete(categoryId);
        response.json({
            success: true,
            data: deletedFood,
        });
    }
    catch (error) {
        response.status(444).json({
            success: false,
            error: error,
        });
    }
};
