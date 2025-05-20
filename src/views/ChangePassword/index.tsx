import { SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Text, Toast } from '@ant-design/react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import styles from './index.css.tsx';
import { View } from '@ant-design/react-native';
import { HomeNavigationProps } from '../../types/App';

const ChangePassword: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const { changePassword } = useAuth();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Toast.info('请填写所有密码字段');
      return;
    }

    if (newPassword !== confirmPassword) {
      Toast.info('新密码与确认密码不匹配');
      return;
    }

    if (newPassword.length < 6) {
      Toast.info('新密码长度不能少于6位');
      return;
    }

    setLoading(true);
    try {
      await changePassword({
        old_password: oldPassword,
        new_password: newPassword,
      });
      Toast.success('密码修改成功');
      navigation.goBack();
    } catch (error: any) {
      Toast.fail(error.message || '密码修改失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>修改密码</Text>
        </View>

        {/* 输入区域 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="请输入原密码"
            placeholderTextColor="#999999"
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="请输入新密码"
            placeholderTextColor="#999999"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="请确认新密码"
            placeholderTextColor="#999999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* 修改密码按钮 */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>{loading ? '提交中...' : '确认修改'}</Text>
        </TouchableOpacity>

        {/* 底部文字 */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.linkText}>返回个人中心</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword; 