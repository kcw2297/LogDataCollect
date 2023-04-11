// Libraries
import express from 'express';

// modules
import {getUsers} from '../controllers/usersController.js';

export const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', getUsers);

// export default router
