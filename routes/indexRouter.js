// Libraries
import express from "express";

// Modules
import {getIndex} from "../controllers/indexController.js";

export const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", getIndex);

// export default router;
