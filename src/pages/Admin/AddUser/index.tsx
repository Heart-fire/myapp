import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import {message, Tabs} from 'antd';
import {create} from "@/services/ant-design-pro/api";
import {SYSTEM_LOGO} from "@/constants";
import React from "react";
import {API} from "@/services/ant-design-pro/typings";


export default () => {
  const handleCreate = async (values: API.CreateParams) => {
    try {
      // 创建用户
      const suc = await create(values);
      if (suc) {
        const defaultLoginSuccessMessage = '创建成功！';
        message.success(defaultLoginSuccessMessage);
        location.reload();
        return;
      }
    } catch (error: any) {
      message.error('注册失败，请重试');
    }
  };
  return (
    <div style={{
      backgroundImage: 'url("https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E4%BC%99%E4%BC%B49.jpg")', // 设置背景图片路径
      backgroundSize: 'cover', // 图片尺寸覆盖整个元素，可能会裁剪图片
      backgroundPosition: 'center', // 图片居中显示
      backgroundRepeat: 'no-repeat' // 图片不重复
    }}>
      <LoginForm
        submitter={{
          searchConfig: {
            submitText: '创建用户'
          }
        }}
        logo={<img alt="logo" src={SYSTEM_LOGO}/>}
        title="智享用户服务中心"
        subTitle="很多事情就像是旅行一样，当你做出决定并迈出第一步的时候，最困难的那部分其实就已经完成了。"
        onFinish={async (values) => {
          await handleCreate(values as API.CreateParams);
        }}
      >
        <Tabs
          centered
          activeKey={'account'}
        >
          <Tabs.TabPane key={'account'} tab={'用户信息创建'} />
        </Tabs>
        {(
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名'}
              rules={[
              ]}
            />
            <ProFormText
              name="userAccount"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户账户 '}
              rules={[
                {
                  required: true,
                  message: '请输入用户账户!',
                },
                {
                  min:4,
                  message: '用户账户长度不得小于4',
                },
              ]}
            />
            <ProFormText.Password
              name="userPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
                {
                  min:8,
                  message:'密码长度不得小于8',
                },
              ]}
            />
            <ProFormText
              name="planetCode"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'任意学号 '}
              rules={[
                {
                  max:10,
                  message:'学号固定为任意10位数',
                },
                {
                  required:true,
                  message:'学号为必填项！',
                }
              ]}
            />
            <ProFormText
              name="avatarUrl"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户头像地址URL '}
              rules={[

              ]}
            />
            <ProFormText
              name="gender"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户性别 '}
              rules={[
                {
                  max:1,
                  message:'只能是1-男  0-女',
                }
              ]}
            />
            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户邮箱 '}
              rules={[
              ]}
            />
            <ProFormText
              name="userStatus"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户状态 0-正常 '}
              rules={[
                {
                  max:1,
                  message:'只能有一位表示状态',
                }
              ]}
            />
            <ProFormText
              name="userRole"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户角色 0-普通用户 1-管理员 '}
              rules={[
                {
                  max:1,
                  message:'只能有一位表示角色',
                }
              ]}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
        </div>
      </LoginForm>
    </div>
  );
};
