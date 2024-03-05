import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
