/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth';
import useAuthService from '../../services/Auth';
import { ChangePasswordReq, LoginReq, RegisterReq } from '../../services/Auth/type';
import { Toast } from '@ant-design/react-native';
import { DocumentPickerResponse } from '@react-native-documents/picker';
import { Platform } from 'react-native';

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const {
    postLogin,
    postRegister,
    postLogout,
    postBrainLogin,
    postUpdateBrainWave,
    getUserInfo,
    postUpdateUserInfo,
    postChangePassword,
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
      postLogout(state.token).then(() => {
        dispatch({
          type: 'LOGOUT',
        });
      }).catch((err) => {
        console.log(err);
        Toast.fail(err.message);
      });
    }
    else {
      return Promise.reject({
        message: '未登录，无法退出',
      });
    }
  };

  const brainLogin = async (file: DocumentPickerResponse) => {
    const formData = new FormData();
    if (!file.uri || !file.name || !file.size || !file.type) {
      return Promise.reject({
        message: '文件不存在',
      });
    }
    // 创建文件对象，符合后端要求
    const fileObject = {
      uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file:///', ''),
      type: file.type || 'application/octet-stream',
      name: file.name || 'brain_wave_file',
    };

    // 添加到FormData
    formData.append('brain_wave_file', fileObject as any);
    if (!formData) {
      return Promise.reject({
        message: '文件不存在',
      });
    }
    console.log(formData);
    try {
      const res = await postBrainLogin(formData);
      console.log('脑波登录成功', res);
      if (res && res.data) {
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        });
        return res;
      } else {
        throw new Error('服务器响应格式错误');
      }
    } catch (err: any) {
      console.log('脑波登录失败', err);
      Toast.fail(err.message || '登录失败');
      throw err;
    }
  };

  const updateBrainWave = async (file: DocumentPickerResponse) => {
    const formData = new FormData();
    if (!file.uri || !file.name || !file.size || !file.type) {
      return Promise.reject({
        message: '文件不存在',
      });
    }
    // 创建文件对象，符合后端要求
    const fileObject = {
      uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file:///', ''),
      type: file.type || 'application/octet-stream',
      name: file.name || 'brain_wave_file',
    };

    // 添加到FormData
    formData.append('brain_wave_file', fileObject as any);
    if (!formData) {
      return Promise.reject({
        message: '文件不存在',
      });
    }
    console.log(formData);
    if (!state.token) {
      return Promise.reject({
        message: '未登录，无法更新脑波',
      });
    }
    try {
      const res = await postUpdateBrainWave(formData, state.token);
      console.log('脑波更新成功', res);
      if (res && res.data) {
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        });
        return res;
      } else {
        throw new Error('服务器响应格式错误');
      }
    } catch (err: any) {
      console.log('脑波更新失败', err);
      Toast.fail(err.message || '更新失败');
      throw err;
    }
  };

  const getUserInfoAll = async () => {
    if (!state.token) {
      return Promise.reject({
        message: '未登录，无法获取用户信息',
      });
    }
    const res = await getUserInfo(state.token);
    dispatch({
      type: 'SET_USER',
      payload: res.data.user,
    });
    return res;
  };

  const updateUserInfo = async (data: FormData) => {
    if (!state.token) {
      return Promise.reject({
        message: '未登录，无法更新用户信息',
      });
    }
    console.log('更新用户信息', data);
    const res = await postUpdateUserInfo(data, state.token);
    console.log('更新用户信息成功', res);
    dispatch({
      type: 'SET_USER',
      payload: res.data,
    });
    return res;
  };

  const changePassword = async (data: ChangePasswordReq) => {
    if (!state.token) {
      return Promise.reject({
        message: '未登录，无法更新密码',
      });
    }
    const res = await postChangePassword(data, state.token);
    console.log('更新密码成功', res);
    return res;
  };

  useEffect(() => {
    getUserInfoAll();
  }, []);
  return {
    login,
    register,
    logout,
    brainLogin,
    updateBrainWave,
    getUserInfoAll,
    updateUserInfo,
    changePassword,
  };
};

export default useAuth;
