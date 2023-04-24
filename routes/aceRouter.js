// Libraries
import express from "express";
// Modules
import {getAce} from "../controllers/aceController.js"

export const aceRouter = express.Router();

aceRouter.get('/',getAce);