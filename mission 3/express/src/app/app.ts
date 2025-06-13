import express, { Application, Request, Response } from 'express';
const app: Application = express();
app.use(express.json());





const todoRoutes = express.Router();
app.use('/todos', todoRoutes);
todoRoutes.get('/all', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'List of todos',
    todos: [
      { id: 1, title: 'Learn TypeScript' },
      { id: 2, title: 'Build an API' },
      { id: 3, title: 'Deploy to Production' },
    ],
  });
});




app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Md. Nazmus Sakib, World!');
});
app.get('/office', (req: Request, res: Response) => {
  res.status(200).send('BD, World!');
});
app.get('/office/open', (req: Request, res: Response) => {
  res.status(200).send('BD, office closed!');
});



export default app;