import { PageContainer } from '@ant-design/pro-components';
import { Card, theme } from 'antd';
import React from 'react';


/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundPosition: '90%-7%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '210px auto',
            backgroundImage:
              "url('https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%90%90%E8%88%8C.png')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 智享用户服务中心
          </div>
          <p
            style={{
              fontSize: '15px',
              color: token.colorTextSecondary,
              lineHeight: '20px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            智享用户服务中心基于<b>Spring Boot</b> 和 <b>React</b>构建的一站式用户管理系统，不仅实现了用户注册、登录、查询管理等基础功能，还进一步拓展了一系列高级特性和服务，
            以满足用户多样化的需求。智享用户服务中心，是科技与浪漫的交汇点，我们用智能科技为用户带来便捷，用温馨服务为用户带来感动。
            <br/><br/>感谢你在我的世界里留下足迹，愿你的每一天都充满阳光和欢笑。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://springdoc.cn/spring-boot/"
              title="了解 SpringBoot"
              desc="Spring Boot是由Pivotal团队提供的一套开源框架，可以简化spring应用的创建及部署。它提供了丰富的Spring模块化支持，
              可以帮助开发者更轻松快捷地构建出企业级应用。Spring Boot通过自动配置功能，降低了复杂性，同时支持基于JVM的多种开源框架，可以缩短开发时间，使开发更加简单和高效。"
            />
            <InfoCard
              index={2}
              title="了解 ant design"
              href="https://ant.design"
              desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
            />
            <InfoCard
              index={3}
              title="了解 Pro Components"
              href="https://procomponents.ant.design"
              desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};
export default Welcome;
