import express, { Application, Request, Response } from 'express';
import { todoRoutes } from '../todos/todos.routes';
import { userRoutes } from '../users/users.routes';
const app: Application = express();
app.use(express.json());



app.use('/users', userRoutes);

app.use('/todos', todoRoutes);





app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Md. Nazmus Sakib, World!');
});




export default app;