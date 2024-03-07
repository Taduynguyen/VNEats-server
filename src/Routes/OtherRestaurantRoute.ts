import express from "express";
import { param } from "express-validator";
import OtherRestaurantController from "../controllers/OtherRestaurantController";

const router = express.Router();

// /api/v2/restaurant/search/bienhoa
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
