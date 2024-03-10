import { useState } from 'react';
import { Flex, Input, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface InputFormProps {
  filterBooksWithoutDebounce: (searchQuery: string) => void;
  filterBooksWithDebounce: (searchQuery: string) => void;
  requestCount: number;
}

const InputForm: React.FC<InputFormProps> = ({
  filterBooksWithoutDebounce,
  filterBooksWithDebounce,
  requestCount,
}) => {
  const [searchQueryWithoutDebounce, setSearchQueryWithoutDebounce] =
    useState<string>(''); // Estado del texto de entrada sin debounce
  const [searchQueryWithDebounce, setSearchQueryWithDebounce] =
    useState<string>(''); // Estado del texto de entrada con debounce
  const [turnOnDebounce, setTurnOnDebounce] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;

    const filterMethod = turnOnDebounce
      ? filterBooksWithDebounce
      : filterBooksWithoutDebounce;

    if (turnOnDebounce) {
      setSearchQueryWithDebounce(newValue);
    } else {
      setSearchQueryWithoutDebounce(newValue);
    }

    filterMethod(newValue);
  };

  return (
    <Flex justify="center" align="start" gap="large">
      <Flex justify="center" align="center" gap="large" vertical>
        <Input
          value={searchQueryWithoutDebounce || searchQueryWithDebounce}
          onChange={handleInputChange}
          style={{ width: 500 }}
          size="large"
          placeholder="Filter by title..."
          allowClear
          autoFocus
        />
        <span style={{ fontSize: '16px' }}>
          Number of requests per server:{' '}
          <span style={{ fontWeight: 600, fontSize: 24 }}>{requestCount}</span>
        </span>
      </Flex>
      <Flex
        style={{
          border: '1px solid #8e8e8e',
          borderRadius: '15px',
          padding: 10,
        }}
        gap="middle"
        vertical
      >
        <Flex gap="small">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={turnOnDebounce}
            onChange={setTurnOnDebounce}
          ></Switch>
          <Typography.Text>
            Turn <span style={{ fontWeight: 500 }}>debounce</span> on
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InputForm;
