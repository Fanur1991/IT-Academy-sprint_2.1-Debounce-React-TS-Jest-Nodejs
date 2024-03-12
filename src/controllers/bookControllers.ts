import { Request, Response } from 'express';
import { filterBooks, getAllBooks } from '../services/bookService';

export const fetchAllBooks = async (_req: Request, res: Response) => {
  try {
    const books = await getAllBooks();

    if (books.length > 0) res.json(books);
    else res.status(404).json({ message: 'Books not found' });
  } catch (error) {
    console.log('Error in controller' + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const fetchFiltredBooks = async (req: Request, res: Response) => {
  try {
    const searchQuery: string = req.query.search as string;
    const filtredBooks = await filterBooks(searchQuery);

    if (await filtredBooks.length > 0) res.json(filtredBooks);
    else res.status(404).json({ message: 'Books not found' });
  } catch (error) {
    console.log('Error in controller' + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
