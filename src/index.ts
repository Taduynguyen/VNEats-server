import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoute from "./Routes/UserRoute";
import RestaurantRoute from "./Routes/RestaurantRoute";
import { v2 as cloudinary } from "cloudinary";
import OtherRestaurantRoute from "./Routes/OtherRestaurantRoute";
import OrderRoute from "./Routes/OrderRoute";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(cors());

app.use("/api/v1/order/checkout/webhook", express.raw({ type: "*/*" }));

app.use(express.json());

app.use("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health is OK!" });
});

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/restaurant", RestaurantRoute);
app.use("/api/v1/other/restaurant", OtherRestaurantRoute);
app.use("/api/v1/order", OrderRoute);

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
