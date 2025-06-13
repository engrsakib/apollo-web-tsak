"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todoRoutes = express_1.default.Router();
app.use('/todos', todoRoutes);
todoRoutes.get('/all', (req, res) => {
    res.status(200).send({
        message: 'List of todos',
        todos: [
            { id: 1, title: 'Learn TypeScript' },
            { id: 2, title: 'Build an API' },
            { id: 3, title: 'Deploy to Production' },
        ],
    });
});
app.get('/', (req, res) => {
    res.status(200).send('Md. Nazmus Sakib, World!');
});
app.get('/office', (req, res) => {
    res.status(200).send('BD, World!');
});
app.get('/office/open', (req, res) => {
    res.status(200).send('BD, office closed!');
});
exports.default = app;
