import express from "express";
import { Request, Response, NextFunction } from 'express';
import { createUser } from "../controller/index";

const userRouter = express.Router();

userRouter.post('/', (req: Request, res: Response, next: NextFunction) => createUser.create(req, res, next));

export { userRouter };
// userRouter.get('/', (req: Request, res: Response, next: NextFunction) => readUsers.read(req, res, next));

// userRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => deleteUser.delete(req, res, next));

// userRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => updateUser.update(req, res, next));

// userRouter.patch('/:id/activate', (req: Request, res: Response, next: NextFunction) => activateUser.activate(req, res, next));
