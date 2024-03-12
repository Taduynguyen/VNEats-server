import express from "express";
import { param } from "express-validator";
import OtherRestaurantController from "../controllers/OtherRestaurantController";

const router = express.Router();

// /api/v1/other/restaurant/
router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId parament must be a valid string"),
    OtherRestaurantController.getOtherRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parament must be a valid string"),
  OtherRestaurantController.searchOtherRestaurants
);

export default router;
