import { Spin } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: React.FC = function () {
  return (
    <React.Suspense fallback={<Spin />}>
      <Outlet />
    </React.Suspense>
  );
};
