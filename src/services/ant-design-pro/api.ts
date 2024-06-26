// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';
import { API } from '@/services/ant-design-pro/typings';


/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
// ===========================================================================================================
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * 注册接口
 * @param body
 * @param options
 */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.RegisterResult>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * 搜索用户，GET/api/user/search
 * @param options
 */
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 新增用户接口 POST /api/user/create */
export async function create(body: API.CreateParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<Boolean>>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户 Post /api/user/update/my */
export async function userModify(body: API.CurrentUser, options?: { [key: string]: any }) {
  console.log(body);
  return request<API.BaseResponse<boolean>>('/api/user/update/my', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 修改用户 POST /api/user/update/my */
export async function updateUserInfoByAdmin(
  body: API.CurrentUser,
  options?: { [key: string]: any },
) {
  console.log(body);
  return request<API.BaseResponse<boolean>>('/api/user/update', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 删除用户 POST /api/user/delete */
export async function deleteUser(body: API.DeleteParam, options?: { [key: string]: any }) {
  return request<API.BaseResponse<boolean>>('/api/user/delete', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 修改密码 Post /api/user/modifyPassword */
export async function modifyPassword(
  body: API.ModifyPasswordParam,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse<boolean>>('/api/user/update/password', {
    method: 'POST',
    data: body,
    ...options,
  });
}

/** 头像上传 POST /api/file/upload.tsx */
export async function fileUpload(body: API.FileUpload, options?: { [key: string]: any }) {
  return request<API.BaseResponse<boolean>>('/api/file/upload', {
    method: 'POST',
    data: body,
    ...options,
  });
}
