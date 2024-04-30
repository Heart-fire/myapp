import React, { useEffect, useState } from 'react';
import { Descriptions, Divider } from 'antd';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { Image, Button, message } from 'antd';
// @ts-ignore
import { request } from 'umi';
import { modifyPassword, userModify } from '@/services/ant-design-pro/api';
import {DEFAULT_AVATAR_URL, selectAvatarUrl, selectGender} from '@/constants';
import type { API } from '@/services/ant-design-pro/typings';
import { ProFormSelect } from '@ant-design/pro-form';
import moment from "moment";
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const UserInfo: React.FC = () => {
  const [myUser, setMyUser] = useState({
    id: 0,
    username: '',
    userAccount: '',
    avatarUrl: '',
    gender:1,
    phone: '',
    email: '',
    userStatus: 0,
    userRole: 0,
    createTime: '',
    planetCode: -1,
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await request('/api/user/current', { method: 'GET' });
        if (response && response.data) {
          setMyUser(response.data);
        } else {
          console.error('Failed to fetch user information:', response);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    console.log('currentUser:', myUser);
  }, [myUser]);
  //以上代码修改后=====================================================
  return (
    <>
      {/*//让头像处于居中状态，不会随着页面变化而变化*/}
      <Divider>用户头像</Divider>
      <Descriptions style={{ margin: 'auto', textAlign: 'center' }}>
        <Descriptions.Item
          style={{
            display: 'flex',
            justifyContent: 'center', // 水平居中
            alignItems: 'center', // 垂直居中
            height: '100%', // 确保有足够的空间来垂直居中
          }}
        >
          <Image
            src={myUser.avatarUrl === null ? DEFAULT_AVATAR_URL : myUser.avatarUrl}
            width={200}
            height={200}
            style={{ maxWidth: '100%', maxHeight: '100%' }} // 确保图像不会超出容器大小
          />
        </Descriptions.Item>
      </Descriptions>

      <Divider>用户信息</Divider>
      <Descriptions bordered column={4}>
        <Descriptions.Item label="您的用户名" span={1.5}>
          {myUser.username}
        </Descriptions.Item>
        <Descriptions.Item label="您的账户" span={1.5}>
          {myUser.userAccount}
        </Descriptions.Item>
        <Descriptions.Item label="您目前身份" span={1.5}>
          {myUser.userRole === 0 ? '普通用户' : '管理员'}
        </Descriptions.Item>
        <Descriptions.Item label="性别" span={1.5}>
          {myUser.gender !== null ? (myUser.gender === 1 ? '男' : '女') : '未填写'}
        </Descriptions.Item>
        <Descriptions.Item label="您的学号" span={1.5}>
          {myUser.planetCode}
        </Descriptions.Item>
        <Descriptions.Item label="创建时间" span={1.5}>
          {moment(myUser.createTime).format('YYYY年MM月DD日 HH时mm分')}
        </Descriptions.Item>
        <Descriptions.Item label="当前状态" span={1.5}>
          {myUser.userStatus === 0 ? '正常' : '异常'}
        </Descriptions.Item>
        <Descriptions.Item label="您的电话" span={1.5}>
          {myUser.phone !== null ? myUser.phone : '未填写'}
        </Descriptions.Item>
        <Descriptions.Item label="您的邮箱" span={3}>
          {myUser.email !== null ? myUser.phone : '未填写'}
        </Descriptions.Item>
      </Descriptions>

      <ModalForm<API.CurrentUser>
        title="修改本用户信息"
        trigger={
          <Button type="primary" shape="round" style={{ marginTop: '50px', marginLeft:'10px',marginRight:'10px'}}>修改信息</Button>
        }
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          onCancel: () => console.log('run'),
        }}
        submitTimeout={2000}
        onFinish={async (values) => {
          await waitTime(1000);
          //点击发起请求
          values.id = myUser.id;
          const isModify = await userModify(values);
          if (isModify) {
            message.success('修改成功');
            // 刷新用户信息表单
            location.reload();
            return true;
          }
          return false;
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="username"
            label="用户名"
            placeholder="请输入用户名"
            initialValue={myUser.username}
          />
          <ProFormText
            width="md"
            name="planetCode"
            label="用户学号"
            placeholder="请输入用户学号"
            initialValue={myUser.planetCode}
          />
          <ProFormSelect
            name="gender"
            fieldProps={{
              size: 'large',
            }}
            label="性别"
            options={selectGender}
            placeholder="请选择性别"
            rules={[
              {
                required: true,
                message: '请选择性别',
              },
            ]}
          />
          <ProFormText
            width="md"
            name="phone"
            label="手机号"
            placeholder="请输入手机号"
            initialValue={myUser.phone}
          />
          <ProFormText
            width="md"
            name="email"
            label="邮箱"
            placeholder="请输入邮箱"
            initialValue={myUser.email}
          />
          <ProFormSelect
            name="avatarUrl"
            fieldProps={{
              size: 'large',
            }}
            label="用户头像"
            options={selectAvatarUrl}
            placeholder={'请选择用户头像 '}
            initialValue={myUser.avatarUrl}
            rules={[
              {
              },
            ]}
            width="md"
            showSearch
          />
          <ProFormText
            name="avatarUrl"
            label="您还可以自定义头像地址，选择任意一个即可"
            placeholder="请输入头像地址"
            initialValue={myUser.avatarUrl}
            rules={[
              {
                validator: (_, value) => {
                  // 根据需求添加头像地址验证逻辑，例如验证是否为合法的URL
                  if (!value) {
                    return Promise.reject('请输入自定义头像地址');
                  }
                  return Promise.resolve();
                },
              },
            ]}
            width="md"
          />
        </ProForm.Group>
      </ModalForm>

      <ModalForm<API.ModifyPasswordParam>
        title="修改密码"
        trigger={
          <Button danger shape="round" style={{ margin: '10px' }}>修改密码</Button>
        }
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          onCancel: () => console.log('run'),
        }}
        submitTimeout={2000}
        onFinish={async (values) => {
          await waitTime(1000);
          const { userPassword, newPassword } = values;
          if (userPassword === newPassword) {
            message.error('新密码不能与旧密码相同');
            return false;
          }
          //点击了提交
          const isModify = await modifyPassword(values);
          if (isModify) {
            message.success('修改成功');
            // 刷新用户信息表单
            location.reload();
            return true;
          }
          return false;
        }}
      >
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="userPassword"
            label="原密码"
            tooltip={'请输入本用户原密码'}
            rules={[{ required: true }, { min: 8, message: '密码不会小于8位' }]}
            placeholder="请输入原密码"
          />
          <ProFormText.Password
            width="md"
            name="newPassword"
            label="新密码"
            tooltip={'请输入新密码，密码不得小于8位'}
            rules={[{ required: true }, { min: 8, message: '新密码小于8位' }]}
            placeholder="请输入新密码"
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};

export default UserInfo;
