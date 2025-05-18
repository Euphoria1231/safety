import React, { useState } from 'react';
import { TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';
import { View, Text, Toast } from '@ant-design/react-native';
import useAuth from '../../hooks/useAuth';
const Register: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [agreed, setAgreed] = useState(false);

  const { register } = useAuth();

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Toast.fail('两次密码不一致');
      return;
    }
    register({
      account,
      password,
    }).then(() => {
      Toast.success('注册成功');
      navigation.navigate('MainTabs');
    }).catch(err => {
      Toast.fail(err.message);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

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
            value={account}
            onChangeText={setAccount}
          />
          <TextInput
            style={styles.input}
            placeholder="请设置密码"
            placeholderTextColor="#999999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="请确认密码"
            placeholderTextColor="#999999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
          onPress={handleRegister}
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
