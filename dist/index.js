"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./router/user.router");
const pg = __importStar(require("pg"));
const { Pool } = pg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    password: 'post18288'
});
pool.connect();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers.apikey;
    if (apiKey && apiKey === '123') {
        next();
    }
    else {
        res.status(401).send('Invalid Key');
    }
};
app.use('/users', validateApiKey, user_router_1.userRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Our server is listening on port ${port}`);
});
exports.default = pool;
