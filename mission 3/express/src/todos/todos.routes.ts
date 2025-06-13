import express, { Request, Response } from 'express';
export const todoRoutes = express.Router();


todoRoutes.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'List of todos',
    todos: [
      { id: 1, title: 'Learn TypeScript' },
      { id: 2, title: 'Build an API' },
      { id: 3, title: 'Deploy to Production' },
    ],
  });
});