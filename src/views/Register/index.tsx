import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';

const Register = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [agreed, setAgreed] = useState(false);

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
        <View style={styles.registerTitleContainer}>
          <Text style={styles.registerTitleText}>注册新账号</Text>
        </View>

        {/* 输入区域 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="请输入手机号"
            placeholderTextColor="#999999"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="请输入验证码"
            placeholderTextColor="#999999"
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="请设置密码"
            placeholderTextColor="#999999"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="请确认密码"
            placeholderTextColor="#999999"
            secureTextEntry
          />
        </View>

        {/* 用户协议 */}
        <View style={styles.agreementContainer}>
          <TouchableOpacity
            onPress={() => setAgreed(!agreed)}
          >
            <View style={[
              styles.checkboxContainer,
              agreed && styles.checkboxSelected,
            ]}>
              {agreed && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text style={styles.agreementText}>
            我已阅读并同意
            <Text style={styles.agreementLink}>《用户协议》</Text>
            和
            <Text style={styles.agreementLink}>《隐私政策》</Text>
          </Text>
        </View>

        {/* 注册按钮 */}
        <TouchableOpacity
          style={[
            styles.registerButton,
            !agreed && { opacity: 0.5 },
          ]}
          disabled={!agreed}
        >
          <Text style={styles.registerButtonText}>注册</Text>
        </TouchableOpacity>

        {/* 底部文字 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>已有账号?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>立即登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
