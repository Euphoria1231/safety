import { request } from '../request';
import type { LoginReq, LoginRes, RegisterReq, RegisterRes } from './type';
const useAuthService = () => {
  const postLogin = (data: LoginReq): Promise<LoginRes> => {
    return request('post', '/auth/login', data);
  };

  const postRegister = (data: RegisterReq): Promise<RegisterRes> => {
    return request('post', '/auth/register', data);
  };

  const postLogout = (token: string) => {
    return request('post', '/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return {
    postLogin,
    postRegister,
    postLogout,
  };
};

export default useAuthService;
