import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {PLANET_LINK} from '@/constants/index';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Plant',
          title: '知识星球   ',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: '   github',
          title:<><GithubOutlined />心火 Github</>,
          href: 'https://blog.csdn.net/weixin_52301330?spm=1000.2115.3001.5343',
          blankTarget: true,
        },
        {
          key: '   CodeNav',
          title: '编程导航',
          href: 'https://space.bilibili.com/497465268/favlist?fid=2558765868&ftype=create&spm_id_from=333.999.0.0',
          blankTarget: true,
        },
      ]}
      copyright="2024心火出品"
    />
  );
};

export default Footer;
