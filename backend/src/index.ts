import express from "express";
import foodsRouter from "./routes/food.routes.js";
import mongoose from "mongoose";
import foodsRouterCategory from "./routes/category.routes.js";
import userRouter from "./routes/user.routes.js";
import ordersRouterCategory from "./routes/food-order.routes.js";
import foodOrderItemRouter from "./routes/foodOrderItems.routes.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL as string);

const server = express();
server.use(express.json());

const port = process.env.PORT || 4000;

server.use("/food", foodsRouter);
server.use("/category", foodsRouterCategory);
server.use("/user", userRouter);
server.use("/order", ordersRouterCategory);
server.use("/gci", foodOrderItemRouter);
server.use("/", foodOrderItemRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});
