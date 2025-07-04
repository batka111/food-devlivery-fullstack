import { Food } from "../models/index.js";
export const getAllFoods = async (request, response) => {
    try {
        const foods = await Food.find().populate("category");
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
export const getFoodByid = (request, response) => {
    response.send("food/:foodId Get huselt irlee");
};
export const createFood = async (request, response) => {
    try {
        const food = request.body;
        const createdFood = await Food.create(food);
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
export const updateFood = (request, response) => {
    response.send("food/:foodId Patch huselt irlee");
};
export const deleteFood = async (request, response) => {
    try {
        const { foodId } = request.params;
        const deletedFood = await Food.findByIdAndDelete(foodId);
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
