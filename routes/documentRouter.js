// Libraries
import express from "express";

// Modules
import { createDocument, searchDocument } from "../controllers/documentController.js";

export const documentRouter = express.Router();


documentRouter.get('/', searchDocument);
documentRouter.get('/search', searchDocument);
documentRouter.post('/create', createDocument);
