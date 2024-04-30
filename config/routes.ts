export default [
  {
    path: '/user',
    layout: false,
    routes: [{
      name: '登录',
      path: '/user/login',
      component: './User/Login'
    }],
  },
  {
    path: '/user',
    layout: false,
    routes: [{
      name: '注册',
      path: '/user/register',
      component: './User/Register'
    }],
  },
      {path: '/welcome', name: '欢迎', icon: 'HeartTwoTone', component: './WelcomeS'},
      {path: '/welcome/One', name: '技术选型', icon: 'smile', component: './Welcome'},


  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      {path: '/admin/user-manage', name: '用户管理', component: './Admin/UserManage'},
      {path: '/admin/add-user', name: '新客雅录', component: './Admin/AddUser',},
      {path: '/admin/add-upload', name: '云笺名卷', component: './Admin/YunTu/upload',},
    ],
  },

  {path: '/user-info', name: '个人信息', icon: 'user', component: './UserInfo'},
  {name: '分类展示', icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
