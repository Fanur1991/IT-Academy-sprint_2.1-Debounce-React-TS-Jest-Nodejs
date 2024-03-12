import { useEffect, useState } from 'react';
import { Flex, Form, Typography } from 'antd';
import InputForm from './components/InputForm';
import ListForm from './components/ListForm';
import { debounce } from './utils/debounce';

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
  const [requestCount, setRequestCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: BookType[] = await response.json();

      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFiltredBooks = async (searchQuery: string) => {
    try {
      setLoading(true);
      console.log(searchQuery);

      const response = await fetch(`/api/books?search=${searchQuery}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: BookType[] = await response.json();

      console.log(data);
      setLoading(false);
      setBooks(data);
      setSearchQuery(searchQuery);
      setRequestCount((prevCount) => (searchQuery ? ++prevCount : 0));
    } catch (error) {
      console.log(error);
    }
  };

  const filterBooksWithoutDebounce = (searchQuery: string) => {
    fetchFiltredBooks(searchQuery);
  };

  const filterBooksWithDebounce = debounce((searchQuery: string) => {
    fetchFiltredBooks(searchQuery);
  });

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
              requestCount={requestCount}
            />
          </Form.Item>
          <Form.Item>
            <ListForm
              books={books}
              searchQuery={searchQuery}
              loading={loading}
            />
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};

export default App;
