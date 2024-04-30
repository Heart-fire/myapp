import { CheckCard } from '@ant-design/pro-components';
import { Avatar, Button, Form } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <div>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item name="checkbox-group"   label={<span><b>本项目所用技术栈</b></span> }>
          <CheckCard.Group style={{ width: '100%' }}>
            <CheckCard
              title="HTML5"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/html5.png"
                  size="large"
                />
              }
              description="HTML:超文本标记语言是一种用于创建网页的标准标记语言。HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。"
              value="HTML5"
            />

            <CheckCard
              title="CSS"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/css-logo.png"
                  size="large"
                />
              }
              description="CSS是一种用来为结构化文档,添加样式（字体、间距和颜色等）的计算机语言,通过使用 CSS 我们可以大大提升网页开发的工作效率！"
              value="CSS"
            />

            <CheckCard
              title="JavaScript"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/js-logo.png"
                  size="large"
                />
              }
              description="JavaScript是一种脚本编程语言可以在网页实现复杂的功能，网页展现给你的不再是简单的静态信息而是实时的内容更新—交互式的地图"
              value="JavaScript"
            />

            <CheckCard
              title="React"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/react.png"
                  size="large"
                />
              }
              description="React是一个用于构建用户界面的库,它的应用甚至不局限于 Web 开发，它可以与其他库一起使用以渲染到特定环境。"
              value="React"
            />

            <CheckCard
              title="Ant Design Pro"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/ant.svg"
                  size="large"
                />
              }
              description="AntDesignPro为此我们提供完整的脚手架,模板组件,减少学习和开发成本可以显著的减少样板代码。"
              value="Ant Design Pro"
            />

            <CheckCard
              title="Ant Design端组件库"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/ant.svg"
                  size="large"
                />
              }
              description="助力设计开发者更灵活地搭建出「更美」的产品，让用户「快乐工作」开放更多样式算法，让你定制主题更简单"
              value="Ant Design"
            />
            <CheckCard
              title="Umi"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/Umi.png"
                  size="large"
                />
              }
              description="Umi中文发音为「乌米」是可扩展企业级前端应用框架。Umi以路由为基础同时支持配置式路由和约定式路由，保证路由的功能完备并以此进行功能扩展"
              value="Umi"
            />
            <CheckCard
              title="Spring"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/Spring.png"
                  size="large"
                />
              }
              description="Spring是一个支持快速开发JavaEE应用程序的框架。它提供了一系列底层容器和基础设施，并可以和大量常用的开源框架无缝集成。"
              value="Spring"
            />
            <CheckCard
              title="SpringMVC"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/Spring.png"
                  size="large"
                />
              }
              description="SpringMVC就是一个Spring内置的MVC框架,解决WEB开发中常见的问题，而且使用简单，与Spring无缝集成。支持 RESTful风格的URL请求。"
              value="SpringMVC"
            />


            <CheckCard
              title="Mybatis"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/Mybatis.png"
                  size="large"
                />
              }
              description="MyBatis 是一款优秀的持久层框架它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。"
              value="Mybatis"
            />

            <CheckCard
              title="Mybatis-plus"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/Mybatis-plus.svg"
                  size="large"
                />
              }
              description="MyBatis-Plus是一个 MyBatis (opens new window)的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。"
              value="Mybatis-plus"
            />

            <CheckCard
              title="JUnit"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/junit5-logo.png"
                  size="large"
                />
              }
              description="JUnit 是一个编写可重复测试的简单框架。它是单元测试框架的 xUnit 架构的一个实例,提供丰富的断言方法,帮助我们更自动化完成测试"
              value="JUnit"
            />

            <CheckCard
              title="MySQL"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/mysql.png"
                  size="large"
                />
              }
              description="MySQL是最流行的关系型数据库管理系统，在 WEB应用方面MySQL是最好的RDBMS(关系数据库管理系统)应用软件之一"
              value="MySQL"
            />
            <CheckCard
              title="SpringBoot"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/SpringBoot.png"
                  size="large"
                />
              }
              description="SpringBoot可以简化spring应用的创建及部署。提供丰富的Spring模块化支持，可帮助开发者更轻松快捷地构建出企业级应用"
              value="SpringBoot"
            />
            <CheckCard
              title="心技共成长。"
              avatar={
                <Avatar
                  src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E6%9C%9F%E5%BE%85.png"
                  size="large"
                />
              }
              description="让我们在技术的道路上坚韧不拔，不忘初心，勇往直前，同时也珍惜并培养内心的成长，让未来之路更加宽广与美好。"
              value="心技共成长。"
            />
          </CheckCard.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            你的每一次点击都是对我世界的探索，愿你的旅途平安顺遂，幸福快乐。
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


