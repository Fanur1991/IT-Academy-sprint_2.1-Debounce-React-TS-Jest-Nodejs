import { useState } from 'react';
import { Flex, Input, Button, Switch, Space, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const InputForm = () => {
  const onChange = (checked: boolean): void => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Flex justify="center" align="center" gap="large">
      <Input
        style={{ width: 500 }}
        size="large"
        placeholder="Type to find a book"
      />
      <Button type="primary" size="large">
        Filter
      </Button>
      <Space>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
          onChange={onChange}
        ></Switch>
        <Typography.Text>Turn on/off debounce</Typography.Text>
      </Space>
    </Flex>
  );
};

export default InputForm;
