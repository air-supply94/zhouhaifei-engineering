import { Result } from 'antd';
import { Link } from 'react-router-dom';

export const NoPage = () => (
  <Result
    extra={<Link to="/">回到首页</Link>}
    status="404"
    subTitle="对不起,您访问的页面不存在"
    title="404"
  />
);
