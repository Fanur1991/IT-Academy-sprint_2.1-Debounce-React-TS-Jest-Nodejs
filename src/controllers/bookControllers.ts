import { Request, Response } from 'express';
import { filterBooks, getAllBooks } from '../services/bookService';
import { debounce } from '../utils/debounce';

export const fetchAllBooks = async (_req: Request, res: Response) => {
  try {
    const books = await getAllBooks();

    if (books.length > 0) res.json({ books: books });
    else res.status(404).json({ message: 'Books not found' });
  } catch (error) {
    console.log('Error in controller' + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const fetchFiltredBooks = async (req: Request, res: Response) => {
  try {
    const searchQuery: string = req.query.search as string;
    const flag = req.query.flag as string;

    const filtredBooks = parseInt(flag)
      ? await debounce(filterBooks)(searchQuery)
      : await filterBooks(searchQuery);

      console.log(searchQuery);
      console.log(flag);
      console.log(filtredBooks);

    if (await filtredBooks) {
      res.json({ books: filtredBooks });
    } else res.status(404).json({ message: 'Books not found' });
  } catch (error) {
    console.log('Error in controller' + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
