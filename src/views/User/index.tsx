import { Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './index.css.tsx';
import { View, Text, Icon, Modal, Toast, Drawer, Button, Input } from '@ant-design/react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App.tsx';
import useAuth from '../../hooks/useAuth/index.tsx';
import { AuthContext } from '../../contexts/Auth/index.tsx';
import useAuthGuard from '../../hooks/useAuthGuard';

const User: React.FC = () => {
  // 调用认证守卫钩子
  useAuthGuard();

  const navigation = useNavigation<HomeNavigationProps>();
  const { logout } = useAuth();
  const [logoutModalVisible, setLogoutModalVisible] = React.useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [username, setUsername] = useState('ZCharles');
  const [email, setEmail] = useState('zcharles@example.com');
  const [avatar, setAvatar] = useState(require('../../assets/images/avatar.jpg'));
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const { updateUserInfo } = useAuth();
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email || '');
      console.log('用户信息', user);
    }
  }, [user]);

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    logout().then(() => {
      setLogoutModalVisible(false);
      Toast.success('退出成功');
      navigation.navigate('Login');
    }).catch((err) => {
      console.log(err);
      Toast.fail(err.message);
    });
  };

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleSaveProfile = () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    updateUserInfo(formData).then(() => {
      // 使用 dispatch 更新全局状态
      if (user) {
        const updatedUser = {
          ...user,
          username: username,
          email: email,
        };
        dispatch({ type: 'SET_USER', payload: updatedUser });
      }
      Toast.success('个人资料已更新');
      closeDrawer();
    }).catch((err) => {
      console.log(err);
      Toast.fail(err.message);
    });
  };

  const handleSelectImage = () => {
    // 这里可以添加图片选择逻辑
    Toast.info('请选择头像图片');
    // 模拟上传成功
    setTimeout(() => {
      // 模拟更新头像
      setAvatar(require('../../assets/images/avatar.jpg'));
      Toast.success('头像上传成功');
    }, 1500);
  };

  // 用户可操作的选项列表
  const userOptions = [
    {
      title: '修改密码',
      icon: 'lock' as const,
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      title: '修改脑电波文件',
      icon: 'file' as const,
      onPress: () => navigation.navigate('ModifyBrainWave'),
    },
    {
      title: '切换账号',
      icon: 'user' as const,
      onPress: () => navigation.navigate('Login'),
    },
    {
      title: '退出登录',
      icon: 'logout' as const,
      onPress: handleLogout,
    },
  ];

  return (
    <Drawer
      sidebar={
        <View style={styles.drawerContent}>
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerTitle}>编辑个人资料</Text>
          </View>

          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={handleSelectImage}>
              <Image source={avatar} style={styles.drawerAvatar} />
              <View style={styles.avatarUploadOverlay}>
                <Icon name="camera" style={styles.cameraIcon} />
              </View>
            </TouchableOpacity>
            <Text style={styles.uploadText}>点击更换头像</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>用户名</Text>
              <Input
                value={username}
                onChangeText={setUsername}
                placeholder="请输入用户名"
                style={styles.inputItem}
                styles={{
                  input: {
                    height: 40,
                  },
                }}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>邮箱</Text>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="请输入邮箱地址"
                style={styles.inputItem}
                styles={{
                  input: {
                    height: 40,
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.drawerFooter}>
            <Button
              style={styles.saveButton}
              type="primary"
              onPress={handleSaveProfile}
            >
              保存
            </Button>
            <Button
              style={styles.drawerCancelButton}
              onPress={closeDrawer}
            >
              取消
            </Button>
          </View>
        </View>
      }
      position="right"
      open={drawerVisible}
      onOpenChange={setDrawerVisible}
      drawerBackgroundColor="#fff"
      drawerWidth={300}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <View style={styles.content}>
          {/* 右上角菜单按钮 */}
          <TouchableOpacity style={styles.editButton} onPress={openDrawer}>
            <Icon name="edit" style={styles.editIcon} />
          </TouchableOpacity>

          {/* 上半部分：用户信息 */}
          <View style={styles.userInfoContainer}>
            <Image
              style={styles.avatar}
              source={avatar}
            />
            <Text style={styles.username}>{user?.username}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>

          {/* 下半部分：用户操作 */}
          <View style={styles.userOptionsContainer}>
            <Text style={styles.sectionTitle}>账号设置</Text>
            <View style={styles.optionsWrapper}>
              {userOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionItem}
                  onPress={option.onPress}
                >
                  <View style={styles.optionIconContainer}>
                    <Icon name={option.icon} style={styles.optionIcon} />
                  </View>
                  <Text style={styles.optionText}>{option.title}</Text>
                  <Icon name="right" style={styles.arrowIcon} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <Modal
          visible={logoutModalVisible}
          transparent
          maskClosable
          onClose={() => setLogoutModalVisible(false)}
          title="确定要退出登录吗？"
        >
          <View style={styles.modalContent}>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmLogout}
              >
                <Text style={styles.confirmButtonText}>退出登录</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </Drawer>
  );
};

export default User;
