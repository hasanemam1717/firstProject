/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import { router } from './app/routes';
const app: Application = express();
// use parser
app.use(express.json());
app.use(cors());

//applicationRoutes
app.use('/api/v1', router);
// not found
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});



app.use(globalErrorHandler)

export default app;
