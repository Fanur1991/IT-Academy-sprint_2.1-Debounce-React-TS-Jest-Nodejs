import { useEffect, useState } from 'react';
import { Flex, Form, Typography } from 'antd';
import InputForm from './components/InputForm';
import ListForm from './components/ListForm';

import './App.css';

const { Title } = Typography;

export type BookType = {
  title: string;
  author: string;
  year: number;
};

const App: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [responseCount, setResponseCount] = useState<number>(0);
  const [isDebounceOn, setIsDebounceOn] = useState<boolean>(false);
  const flag: number = isDebounceOn ? 1 : 0;

  const filterBooks = (searchQuery: string, isDebounceOn: boolean) => {
    setSearchQuery(searchQuery);
    setIsDebounceOn(isDebounceOn);
  };

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch('/api', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const books: BookType[] = data.books;

        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  useEffect(() => {
    const fetchFiltredBooks = async (searchQuery: string) => {
      try {
        const response = await fetch(
          `/api/books?search=${searchQuery}&flag=${flag}`,
          {
            method: 'GET',
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const books: BookType[] = data.books;

        setBooks(books);
        setResponseCount((responseCount) =>
          searchQuery ? ++responseCount : 0
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchFiltredBooks(searchQuery);
  }, [searchQuery]);

  return (
    <div className="App">
      <Flex style={{ marginTop: 50 }} align="center" vertical>
        <Form>
          <Form.Item>
            <Title style={{ color: '#595959' }} color="#ABACA5">
              E-Library
            </Title>
          </Form.Item>
          <Form.Item>
            <InputForm
              filterBooks={filterBooks}
              responseCount={responseCount}
            />
          </Form.Item>
          <Form.Item>
            <ListForm books={books} searchQuery={searchQuery} />
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};

export default App;
