import * as fs from 'fs';
import dotenv from 'dotenv';
import { Book } from '../types/Book';

dotenv.config();

const PATH_DATABASE = process.env.PATH_DATABASE || '';

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    // Aquí es donde se simula el retraso de acceso a la base de datos
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!PATH_DATABASE) {
      throw new Error('Database path is not defined');
    }

    const data = fs.readFileSync(PATH_DATABASE, 'utf-8');
    const books: Book[] = JSON.parse(data);
    return books;
  } catch (error) {
    console.log('Error in service' + error);
    throw new Error('Error fetching books from database');
  }
};
