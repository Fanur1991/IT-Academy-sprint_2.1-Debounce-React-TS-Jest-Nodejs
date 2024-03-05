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
        placeholder="Type to sort books"
      />
      <Button type="primary" size="large">
        Reset
      </Button>
      <Space>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
          onChange={onChange}
        ></Switch>
        <Typography.Text>Turn debounce on/off</Typography.Text>
      </Space>
    </Flex>
  );
};

export default InputForm;
