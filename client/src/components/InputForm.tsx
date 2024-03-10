import { useState } from 'react';
import { Flex, Input, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface InputFormProps {
  filterBooks: (searchQuery: string, isDebounceOn: boolean) => void;
  responseCount: number;
}

const InputForm: React.FC<InputFormProps> = ({
  filterBooks,
  responseCount,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [turnOnDebounce, setTurnOnDebounce] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;

    setSearchQuery(newValue);
    filterBooks(newValue, turnOnDebounce);
  };

  const handleSwitchChange = (checked: boolean): void => {
    setTurnOnDebounce(checked);
  };

  return (
    <Flex justify="center" align="start" gap="large">
      <Flex justify="center" align="center" gap="large" vertical>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          style={{ width: 500 }}
          size="large"
          placeholder="Filter by title..."
          allowClear
          autoFocus
        />
        <span style={{ fontSize: '16px' }}>
          Number of responses from server:{' '}
          <span style={{ fontWeight: 600, fontSize: 24 }}>{responseCount}</span>
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
            defaultChecked={false}
            onChange={handleSwitchChange}
            value={turnOnDebounce}
          ></Switch>
          <Typography.Text>
            Turn <span style={{ fontWeight: 500 }}>debounce</span> on
          </Typography.Text>
        </Flex>
        {/* <Flex gap="small">
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
          </Typography.Text> */}
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
};

export default InputForm;
