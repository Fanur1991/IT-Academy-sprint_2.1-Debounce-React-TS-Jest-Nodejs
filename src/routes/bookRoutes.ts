import { Router } from 'express';
import { fetchAllBooks } from '../controllers/bookControllers';

const router = Router();

router.get('/books', fetchAllBooks);

export default router;
