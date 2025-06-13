import express, { Application, Request, Response } from 'express';
const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('sakib, World!');
});
app.get('/office', (req: Request, res: Response) => {
  res.send('BD, World!');
});



export default app;