import { Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './index.css.tsx';
import { View, Text, Icon } from '@ant-design/react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App.tsx';

const User: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  // 用户可操作的选项列表
  const userOptions = [
    {
      title: '修改密码',
      icon: 'lock' as const,
      onPress: () => navigation.navigate('Login'),
    },
    {
      title: '修改脑电波文件',
      icon: 'file' as const,
      onPress: () => navigation.navigate('BrainLogin'),
    },
    {
      title: '切换账号',
      icon: 'user' as const,
      onPress: () => navigation.navigate('Login'),
    },
    {
      title: '退出登录',
      icon: 'logout' as const,
      onPress: () => navigation.navigate('Login'),
    },

  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>
        {/* 上半部分：用户信息 */}
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/avatar.jpg')}
          />
          <Text style={styles.username}>ZCharles</Text>
          <Text style={styles.email}>zcharles@example.com</Text>
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
    </SafeAreaView>
  );
};

export default User;
