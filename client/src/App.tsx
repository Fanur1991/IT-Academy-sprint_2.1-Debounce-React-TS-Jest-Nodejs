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

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch('/api', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: BookType[] = await response.json();

        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const filterBooksWithoutDebounce = async (searchQuery: string) => {
    try {
      const response = await fetch(`/api/books?search=${searchQuery}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: BookType[] = await response.json();

      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterBooksWithDebounce = async (searchQuery: string) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

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
              filterBooksWithoutDebounce={filterBooksWithoutDebounce}
              filterBooksWithDebounce={filterBooksWithDebounce}
            />
          </Form.Item>
          <Form.Item>
            <ListForm books={books} />
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};

export default App;
