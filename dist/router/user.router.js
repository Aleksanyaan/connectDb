"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = require("../controller/index");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post('/', (req, res, next) => index_1.createUser.create(req, res, next));
// userRouter.get('/', (req: Request, res: Response, next: NextFunction) => readUsers.read(req, res, next));
// userRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => deleteUser.delete(req, res, next));
// userRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => updateUser.update(req, res, next));
// userRouter.patch('/:id/activate', (req: Request, res: Response, next: NextFunction) => activateUser.activate(req, res, next));
