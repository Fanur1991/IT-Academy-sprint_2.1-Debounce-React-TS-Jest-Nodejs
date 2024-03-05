import { Typography, Flex } from 'antd';
import { BookType } from '../App';

interface IBook {
  book: BookType;
}

const BookForm: React.FC<IBook> = ({ book }) => {
  return (
    <Flex justify="center" gap="small" vertical>
      <Flex align="center" justify="flex-start" gap="middle">
        <Typography.Text type="secondary">Title:</Typography.Text>
        <Typography.Title style={{ margin: 0 }} level={3} mark>
          {book.title}
        </Typography.Title>
      </Flex>
      <Flex align="center" justify="flex-start" gap="middle">
        <Typography.Text type="secondary">Author:</Typography.Text>
        <Typography.Text mark>{book.author}</Typography.Text>
        <Typography.Text type="secondary">Year:</Typography.Text>
        <Typography.Text mark>{book.year}</Typography.Text>
      </Flex>
    </Flex>
  );
};

export default BookForm;
