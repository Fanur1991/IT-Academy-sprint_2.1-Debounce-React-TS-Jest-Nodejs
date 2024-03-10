import { BookType } from '../App';
import BookForm from './BookForm';
import { List, Typography, Spin } from 'antd';

interface IBookList {
  books: BookType[];
  searchQuery: string;
}

const ListForm: React.FC<IBookList> = ({ books, searchQuery }) => {
  return (
    <div>
      <List
        header={
          <Typography.Title style={{ margin: 0 }} level={4}>
            {books.length === 0 ? <Spin spinning /> : 'Book List'}
          </Typography.Title>
        }
        bordered
        dataSource={books}
        renderItem={(book) => (
          <List.Item
            children={<BookForm book={book} searchQuery={searchQuery} />}
          />
        )}
      />
    </div>
  );
};

export default ListForm;
