"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.todoRoutes = express_1.default.Router();
exports.todoRoutes.get('/', (req, res) => {
    res.status(200).send({
        message: 'List of todos',
        todos: [
            { id: 1, title: 'Learn TypeScript' },
            { id: 2, title: 'Build an API' },
            { id: 3, title: 'Deploy to Production' },
        ],
    });
});
