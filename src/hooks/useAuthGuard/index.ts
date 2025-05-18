import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { useNavigation } from '@react-navigation/native';
import { Toast } from '@ant-design/react-native';
import { CommonActions } from '@react-navigation/native';

const useAuthGuard = () => {
  const { state } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!state.token) {
      Toast.info('请先登录');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Login' },
          ],
        })
      );
    }
  }, [state.token, navigation]);

  return state.token ? true : false;
};

export default useAuthGuard; 