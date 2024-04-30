import { UploadFile } from 'antd/es/upload/interface';
declare namespace API {
  type CurrentUser = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    phone?: string;
    email?: string;
    userStatus?: number;
    userRole?: number;
    planetCode: string;
    createTime?: Date;
  };

  /**
   * 修改密码的信息模板
   */
  type ModifyPasswordParam = {
    userPassword: string;
    newPassword: string;
  };
  /**
   * 删除的参数
   */
  type DeleteParam = {
    id: number;
  };

  /**
   * 创建用户变量
   */
  type CreateParams = {
    username?: string;
    userAccount: string;
    userPassword?: string;
    avatarUrl?: string;
    gender: string;
    email: string;
    userStatus: number;
    createTime: Date;
    userRole: string;
    planetCode: string;
  };

  /**
   * 上传头像
   */
  type FileUpload = {
    file?: string;
  };

  /**
   * 统一返回类型
   */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  };

  /**
   * 登录返回的数据
   */
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };
  /**
   * 注册返回的数据
   */
  type RegisterResult = number;
  type PageParams = {
    current?: number;
    pageSize?: number;
  };



  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };
  // ============================================与后端字段一致
  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };
  // ============================================与后端字段一致
  type RegisterParams = {
    userName?:string;
    userAccount?: string;
    userPassword?: string;
    checkPassword?:string;
    planetCode?:string;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
