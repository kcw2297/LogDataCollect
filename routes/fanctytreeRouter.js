// Libraries
import express from "express";
// Modules
import { getFancytree } from "../controllers/fancytreeController.js";

export const fancytreeRouter = express.Router();

fancytreeRouter.get('/',getFancytree);