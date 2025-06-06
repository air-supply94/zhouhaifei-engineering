import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../assets';
import { SYSTEM_CONFIG, type UserInfo, request } from '../utils';

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function () {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  async function onFinish(loginData: Record<string, any>) {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const info = await request<BaseData<UserInfo>>({
        url: '/api/login',
        method: 'POST',
        data: loginData,
      });
      localStorage.setItem(SYSTEM_CONFIG.storageTokenKey, info.data?.accessToken);
      navigate('/');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <img
        alt=""
        src={ASSETS.loginBg}
        className="fixed w-4/5 h-full left-0 bottom-0 z-[-1]"
      />
      <div className="flex-1 flex gap-72">
        <div className="w-[500px] flex justify-center items-center">
          <img
            src={ASSETS.loginIllustration}
            alt=""
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[360px]">
            <Form
              onFinish={onFinish}
              autoComplete="off"
              initialValues={{ username: 'admin', password: '123456' }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入账户' }]}
              >
                <Input
                  className={'h-12'}
                  size={'large'}
                  placeholder={'账户'}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  className={'h-12'}
                  size={'large'}
                  placeholder={'密码'}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  loading={loading}
                  block={true}
                  size={'large'}
                  type="primary"
                  className={'mt-10 h-12'}
                  htmlType="submit"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
