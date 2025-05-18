import React, { useState } from 'react';
import { TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { View, Text, Toast } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const handleLogin = () => {
    if (!account || !password) {
      Toast.fail('请输入账号密码');
      return;
    }
    login({
      account,
      password,
    }).then(() => {
      Toast.success('登录成功');
      navigation.navigate('MainTabs');
    }).catch(err => {
      Toast.fail(err.message);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <View style={styles.content}>
        <View style={styles.LoginTitleContainer}>
          <Text style={styles.LoginTitleText}>账号密码登录</Text>
        </View>
        {/* 输入区域 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="请输入账号"
            placeholderTextColor="#999999"
            value={account}
            onChangeText={setAccount}
          />
          <TextInput
            style={styles.input}
            placeholder="请输入密码"
            placeholderTextColor="#999999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* 登录按钮 */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>登录</Text>
        </TouchableOpacity>

        {/* 底部文字 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>还没有账号?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>立即注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
