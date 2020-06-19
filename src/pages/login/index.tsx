import { Button, Form, Input } from 'antd';
import React from 'react';
import styles from './index.module.less';

export default function Login() {
  const [form] = Form.useForm();

  function handleSubmit(event: React.KeyboardEvent) {
    if (event.keyCode === 13) {
      form.submit();
    }
  }

  function handleFinish(params) {
    // nothing
  }

  return (
    <div className={styles.container}>
      <div className={styles['condition-container']}>
        <Form
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input
              type="text"
              placeholder="请输入用户名"
              onKeyDown={handleSubmit}
            />
          </Form.Item>
          <Form.Item
            name="userPassword"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              type="password"
              placeholder="请输入密码"
              onKeyDown={handleSubmit}
            />
          </Form.Item>
          <Button
            block
            htmlType="submit"
            type="primary"
          >
            登录
          </Button>
        </Form>
      </div>
    </div>
  );
}
