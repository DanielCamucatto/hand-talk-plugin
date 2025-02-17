import express from 'express';
import cors from 'cors';
import { collectRoute } from './routes/collect';
import { listRoute } from './routes/list';
import { authMiddleware } from './middleware/auth';

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.use('/collect', authMiddleware, collectRoute);
app.use('/list', listRoute);

export default app;