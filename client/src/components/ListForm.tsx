import { BookType } from '../App';
import BookForm from './BookForm';
import { List, Typography, Flex } from 'antd';

interface IBookList {
  books: BookType[];
}

const ListForm: React.FC<IBookList> = ({ books }) => {
  return (
    <div>
      <List
        header={
          <Typography.Title style={{ margin: 0 }} level={4}>
            Book List
          </Typography.Title>
        }
        bordered
        dataSource={books}
        renderItem={(book) => <List.Item children={<BookForm book={book} />} />}
      />
    </div>
  );
};

export default ListForm;
