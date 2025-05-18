import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth';
import useAuthService from '../../services/Auth';
import { LoginReq, RegisterReq } from '../../services/Auth/type';
import { Toast } from '@ant-design/react-native';
const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const {
    postLogin,
    postRegister,
    postLogout,
  } = useAuthService();

  const login = async (data: LoginReq) => {
    const res = await postLogin(data);
    dispatch({
      type: 'LOGIN',
      payload: res.data,
    });
  };

  const register = async (data: RegisterReq) => {
    const res = await postRegister(data);

    dispatch({
      type: 'LOGIN',
      payload: res.data,
    });
  };

  const logout = async () => {
    if (state.token) {
      console.log(state.token);
      postLogout(state.token).then(() => {
        dispatch({
          type: 'LOGOUT',
        });
      }).catch((err) => {
        console.log(err);
        Toast.fail(err.message);
      });
    }
    return Promise.reject({
      message: '未登录，无法退出',
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return {
    login,
    register,
    logout,
  };
};

export default useAuth;
