import { Footer } from '@/components';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { LoginForm,
ProFormText,
} from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, Tabs, message } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';
import {SYSTEM_LOGO} from '@/constants';
import {register} from "@/services/ant-design-pro/api";
import {API} from "@/services/ant-design-pro/typings";

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/wallhaven38mm.png')",
      backgroundSize: '100% 100%',
    },
  };
});

const Lang = () => {
  const { styles } = useStyles();
  return;
};
//这里是删除两个，Register,如果多了回报错
const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { styles } = useStyles();

  const handleSubmit = async (values: API.RegisterParams) => {
    //表单提交，加校检密码
    const {userPassword,checkPassword } = values;
    //校验
    if (userPassword  !== checkPassword){
      message.error('再次输入的密码不一致');
      return;
    }

    try {
      // 注册
      const id = await register(values);
      if (id > 0) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
      //此方法会跳转到redirect参数所在的位置
        if (!history)return;
        const{ query } = history.location;
        history.push({pathname: '/user/login',query,});
        return;
       } /*else{*/
      //   throw new Error('register error id =${id}');
      // }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>

      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          //注册表单
          submitter={{
            searchConfig: {
              submitText: "注册"
            }
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO} />}
          title="智享用户服务中心"
          subTitle={'我没有失败5000次，是成功了5000次，我成功地证明了哪些方法行不通。————爱迪生'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码注册',
              },
            ]}
          />


          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请创造您的昵称:'}
                rules={[
                  {
                    required: true,
                    message: '昵称是必填项！',
                  },
                ]}
              />
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账户:'}
                rules={[
                  {
                    required: true,
                    message: '账户是必填项！',
                  },
                  // ==================================增加长度校检
                  {
                    min:4,
                    type:'string',
                    message:'长度不能小于4',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码:'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  // ==================================增加长度校检
                  {
                    min:8,
                    type:'string',
                    message:'长度不能小于8',
                  },
                ]}
              />
              {/*// ===============================================校验密码*/}
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请再次输入密码:'}
                rules={[
                  {
                    required: true,
                    message: '校验密码是必填项！',
                  },
                  // ==================================增加长度校检
                  {
                    min:8,
                    type:'string',
                    message:'长度不能小于8',
                  },
                ]}
              />

              <ProFormText
                name="planetCode"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入您的学号:'}
                rules={[
                  {
                    required: true,
                    message: '学号是必填项！无学号可任意10位哦',
                  },
                ]}
              />
            </>
          )}

        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
