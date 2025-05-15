import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';

const Login = () => {
  const navigation = useNavigation<HomeNavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* 返回按钮 */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

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
          />
          <TextInput
            style={styles.input}
            placeholder="请输入密码"
            placeholderTextColor="#999999"
            secureTextEntry
          />
        </View>

        {/* 登录按钮 */}
        <TouchableOpacity style={styles.loginButton}>
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
