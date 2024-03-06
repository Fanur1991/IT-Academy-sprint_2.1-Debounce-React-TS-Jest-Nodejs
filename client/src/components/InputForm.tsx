import { useState } from 'react';
import { Flex, Input, Button, Switch, Space, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface InputFormProps {
  filterBooksWithoutDebounce: (searchQuery: string) => void;
  filterBooksWithDebounce: (searchQuery: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  filterBooksWithoutDebounce,
  filterBooksWithDebounce,
}) => {
  const [searchQueryWithoutDebounce, setSearchQueryWithoutDebounce] =
    useState<string>('');
  const [searchQueryWithDebounce, setSearchQueryWithDebounce] =
    useState<string>('');
  const [turnOnDebounce, setTurnOnDebounce] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;

    if (!turnOnDebounce) {
      setSearchQueryWithoutDebounce(newValue);
      filterBooksWithoutDebounce(newValue);
    } else {
      setSearchQueryWithDebounce(newValue);
      filterBooksWithDebounce(newValue);
    }
  };

  const handleSwitchChange = (checked: boolean): void => {
    setTurnOnDebounce(checked);
  };

  return (
    <Flex justify="center" align="center" gap="large">
      <Input
        value={searchQueryWithoutDebounce || searchQueryWithDebounce}
        onChange={handleInputChange}
        style={{ width: 500 }}
        size="large"
        placeholder="Type to filter books"
        allowClear
      />
      <Flex
        style={{
          border: '1px solid #8e8e8e',
          borderRadius: '15px',
          padding: 10,
        }}
        gap="small"
        vertical
      >
        <Flex gap="small">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={false}
            onChange={handleSwitchChange}
            value={turnOnDebounce}
          ></Switch>
          <Typography.Text>
            Turn <span style={{ fontWeight: 500 }}>debounce</span> on
          </Typography.Text>
        </Flex>
        <Flex gap="small">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={false}
            disabled
          ></Switch>
          <Typography.Text>
            Turn <span style={{ fontWeight: 500 }}>throttle</span> on
          </Typography.Text>
        </Flex>
        <Flex gap="small">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={false}
            disabled
          ></Switch>
          <Typography.Text>
            Turn <span style={{ fontWeight: 500 }}>memoize</span> on
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InputForm;
