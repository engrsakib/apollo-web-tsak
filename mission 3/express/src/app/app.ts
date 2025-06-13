import express, { Application, Request, Response } from 'express';
const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('sakib, World!');
});
app.get('/office', (req: Request, res: Response) => {
  res.status(200).send('BD, World!');
});



export default app;