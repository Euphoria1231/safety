import { request } from '../request';
import type { BrainLoginRes, ChangePasswordReq, LoginReq, LoginRes, RegisterReq, RegisterRes, UpdateUserInfoRes, UserRes } from './type';
const useAuthService = () => {
  const postLogin = (data: LoginReq): Promise<LoginRes> => {
    return request('post', '/auth/login', data);
  };

  const postRegister = (data: RegisterReq): Promise<RegisterRes> => {
    return request('post', '/auth/register', data);
  };

  const postLogout = (token: string) => {
    return request('post', '/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const postBrainLogin = (file: FormData): Promise<BrainLoginRes> => {
    return request('post', '/auth/brain-wave-login', file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const postUpdateBrainWave = (file: FormData, token: string): Promise<BrainLoginRes> => {
    return request('post', '/auth/update-brain-wave', file, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const getUserInfo = (token: string): Promise<UserRes> => {
    return request('get', '/auth/user-info', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const postUpdateUserInfo = (data: FormData, token: string): Promise<UpdateUserInfoRes> => {
    return request('post', '/auth/update-profile', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const postChangePassword = (data: ChangePasswordReq, token: string)=> {
    return request('post', '/auth/change-password', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return {
    postLogin,
    postRegister,
    postLogout,
    postBrainLogin,
    postUpdateBrainWave,
    getUserInfo,
    postUpdateUserInfo,
    postChangePassword,
  };
};

export default useAuthService;
