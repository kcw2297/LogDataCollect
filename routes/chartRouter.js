// Libraries
import express from "express";
// Modules
import { getPieChart, getLineChart } from "../controllers/chartController.js";

export const chartRouter = express.Router();

chartRouter.get("/", getPieChart);
chartRouter.get("/pie", getPieChart);
chartRouter.get("/line",getLineChart);
