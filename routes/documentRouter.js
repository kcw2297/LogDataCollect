// Libraries
import express from "express";

// Modules
import { createDocument } from "../controllers/documentController";

export const documentRouter = express.Router();

documentRouter.post('/', createDocument);