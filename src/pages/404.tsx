import { history } from '@umijs/max';
import { Button, Empty } from 'antd';
import React from 'react';
const NoFoundPage: React.FC = () => (
    <Empty
      image="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%A4%A9%E6%B4%A5%E7%9C%BC.png"
      imageStyle={{ height: 300,width:300,margin:"auto" }}
      description={
      <h2>
      嘿嘿🤭很高兴您能发现新大陆，该页面正在紧锣密鼓地开发中。我们会努力让它在最短的时间内与大家见面，请保持关注·····
      </h2>
    }
      >
      <Button type="primary" onClick={() => history.push('/')}>
        {'返回首页'}
      </Button>
</Empty>
);
export default NoFoundPage;
