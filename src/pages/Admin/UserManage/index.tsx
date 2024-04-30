import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable,ModalForm, ProForm, ProFormText, WaterMark } from '@ant-design/pro-components';
import {useRef} from "react";
import {Image, message, Popconfirm, Tag } from 'antd';
import { deleteUser, searchUsers, updateUserInfoByAdmin } from '@/services/ant-design-pro/api';
import { ProFormSelect } from '@ant-design/pro-form';
import { selectAvatarUrl, selectGender, selectUserRole, selectUserStatus } from '@/constants';
import styled from 'styled-components';
import {API} from "@/services/ant-design-pro/typings";
//RedLink 是一个使用 styled-components 创建的组件，它将链接的文本颜色设置为红色。然后您可以直接在 trigger 中使用 RedLink 组件。
const RedLink = styled.a`
  color: #ff4d4f;
`;

const columns: ProColumns<API.CurrentUser>[] = [
  {
    title: '序号',
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
    align: 'center',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    ellipsis: true,
    copyable: true,
    tooltip: '名称过长会自动收缩',
    align: 'center',

  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    copyable: true,
    align: 'center',
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    search: false,//表示该列在搜索时不作为搜索条件
    render: (_,record) => (
      <div>
        <Image src={record.avatarUrl} width={85} height={85}/>
      </div>
    ),
    copyable: true,
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'select',
    valueEnum: {
      1: { text: <Tag color="success">男</Tag> },
      0: { text: <Tag color="error">女</Tag> },
    },
    align: 'center',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
    ellipsis: true,
    align: 'center',
  },
  {
    title: '邮件',
    dataIndex: 'email',
    ellipsis: true,
    copyable: true,
    align: 'center',
  },
  {
    title: '用户状态',
    dataIndex: 'userStatus',
    valueType: 'select',
    valueEnum: {
      0: { text: <Tag color="success">正常</Tag>, status: 'Success'},
      1: { text: <Tag color="warning">注销</Tag>,status: 'Default'},
      2: { text: <Tag color="error">封号</Tag>, status: 'Error' },
    },
    align: 'center',
  },
  {
    title: '学号',
    dataIndex: 'planetCode',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
        0: { text: <Tag color="#3DA2FF">普通用户</Tag> },
        1: { text: <Tag color="#FF5E99">管理员</Tag> },
      },
    align: 'center',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: true,
  },
  {
    title: '操作',
    align: 'center',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <ModalForm<API.CurrentUser>
        title="修改用户信息"
        trigger={<a type="link">修改</a>}
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          onCancel: () => console.log('run'),
        }}
        onFinish={async (values) => {
          //点击了提交
          console.log('values 的值为-------');
          //发起请求
          values.id = record.id;
          const isModify = await updateUserInfoByAdmin(values);
          if (isModify) {
            message.success('提交成功');
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
            initialValue={record.username}
          />
          <ProFormText
            width="md"
            name="userAccount"
            label="用户账户"
            placeholder="请输入账户"
            initialValue={record.userAccount}
          />
          <ProFormText
            width="md"
            name="userCode"
            label="用户编号"
            placeholder="请输入编号"
            initialValue={record.planetCode}
          />
          <ProFormText
            width="md"
            name="gender"
            label="性别"
            placeholder="请输入性别"
            initialValue={record.gender}
          />
          <ProFormText
            width="md"
            name="email"
            label="邮箱"
            placeholder="请输入邮箱"
            initialValue={record.email}
          />
          <ProFormSelect
            name="userstatus"
            fieldProps={{
              size: 'large',
            }}
            label="用户状态"
            options={selectUserStatus}
            initialValue={record.userStatus}
            placeholder={'选择用户状态'}
            rules={[
              {
                required: true,
                message: '请选择用户状态',
              },
            ]}
          />
          <ProFormSelect
            name="avatarUrl"
            fieldProps={{
              size: 'large',
            }}
            label="用户头像"
            options={selectAvatarUrl}
            placeholder={'请选择用户头像 '}
            initialValue={record.avatarUrl}
            rules={[
              {
                required: true,
                message: '请输入选择用户头像!',
              },
            ]}
          />
          <ProFormSelect
            name="gender"
            fieldProps={{
              size: 'large',
            }}
            label="性别"
            options={selectGender}
            placeholder="请选择性别"
            initialValue={record.gender}
            rules={[
              {
                required: true,
                message: '请选择性别',
              },
            ]}
          />
          <ProFormSelect
            name="userRole"
            fieldProps={{
              size: 'large',
            }}
            label="用户角色"
            options={selectUserRole}
            initialValue={record.userRole}
            placeholder={'选择用户角色'}
            rules={[
              {
                required: true,
                message: '请选择用户角色',
              },
            ]}
          />

        </ProForm.Group>
      </ModalForm>,
      <a key="view">
        <Popconfirm
          title="删除用户"
          onConfirm={async (e) => {
            console.log(e);
            console.log(record.id);
            const id = record.id;
            const isDelete = await deleteUser({ id: id });
            if (isDelete) {
              message.success('删除成功');
              // 刷新用户信息表单
              location.reload();
            }
          }}
          onCancel={(e) => {}}
          okText="确定"
          cancelText="取消"
        >
          <RedLink type="link">删除</RedLink>
        </Popconfirm>
      </a>,
    ],
  },
];
export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      // 修改 request 函数
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const { current, pageSize, ...restParams } = params; // 解构出分页相关参数
        const userList = await searchUsers(restParams); // 将参数传递给 searchUsers 函数
        return {
          data: userList
        };
      }}

      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
// 修改 syncToUrl 函数
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: values.startTime && values.endTime ? [values.startTime, values.endTime] : undefined, // 对时间范围进行处理
            };
          }
          return values;
        },
      }}

      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src='https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E6%89%93call.png' width={40} height={35}/>
          <span style={{ marginLeft: '10px' }}><b>灵智账户守护者</b></span>
        </div>
      }
    >
    </ProTable>
  );
};

