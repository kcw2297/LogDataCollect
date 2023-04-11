// Libraries
import express from "express";
// Modules
import { getChart } from "../controllers/chartController.js";

export const chartRouter = express.Router();

chartRouter.get("/",getChart);
