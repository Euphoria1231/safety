import { request } from '../request';
import type { BrainLoginRes, LoginReq, LoginRes, RegisterReq, RegisterRes } from './type';
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
  return {
    postLogin,
    postRegister,
    postLogout,
    postBrainLogin,
  };
};

export default useAuthService;
