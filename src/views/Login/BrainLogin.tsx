import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './BrainLogin.css';

// 定义简单的文件信息接口
interface FileInfo {
  name: string;
  size: number;
  type: string;
  uri: string;
}

const BrainLogin = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [authenticating, setAuthenticating] = useState(false);
  const [authStatus, setAuthStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');

  // 模拟文件选择功能
  const handleFileUpload = () => {
    // 使用Alert模拟文件选择器
    Alert.alert(
      '选择脑波数据文件',
      '请选择要上传的脑波数据文件',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '选择文件',
          onPress: () => {
            // 模拟文件选择结果
            const mockFiles = [
              { name: 'brainwave_20240601.eeg', size: 1024 * 512, type: 'application/octet-stream' },
              { name: 'brainwave_20240528.eeg', size: 1024 * 1024, type: 'application/octet-stream' },
              { name: 'brainwave_20240515.eeg', size: 1024 * 768, type: 'application/octet-stream' }
            ];

            // 二级选择菜单
            Alert.alert(
              '可用脑波文件',
              '请选择一个文件',
              [
                ...mockFiles.map((file, _) => ({
                  text: `${file.name} (${Math.round(file.size / 1024)}KB)`,
                  onPress: () => {
                    setFileInfo({
                      ...file,
                      uri: `file://mock/${file.name}`
                    });
                  }
                })),
                { text: '取消', style: 'cancel' }
              ]
            );
          }
        }
      ]
    );
  };

  // 模拟认证过程
  const handleAuthenticate = () => {
    if (!fileInfo) return;

    setAuthenticating(true);
    setAuthStatus('processing');

    // 模拟认证过程时间
    setTimeout(() => {
      // 模拟70%成功率
      const success = Math.random() > 0.3;

      setAuthenticating(false);
      setAuthStatus(success ? 'success' : 'failed');

      if (success) {
        // 模拟登录成功后跳转
        setTimeout(() => {
          navigation.navigate('Home');
        }, 1000);
      }
    }, 3000);
  };

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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>脑波认证登录</Text>
          <Text style={styles.subtitleText}>Mind Guardian</Text>
        </View>

        {/* 脑波视觉元素 */}
        <View style={styles.brainwaveContainer}>
          <View style={styles.brainImageContainer}>
            {/* 模拟脑电波动画 */}
            <View style={[styles.brainAnimation, authStatus === 'processing' && styles.animating]}>
              {/* 模拟脑电波线条 */}
              {[1, 2, 3, 4, 5].map(i => (
                <View key={i} style={[
                  styles.brainwave,
                  i === 1 ? styles.wave1 :
                    i === 2 ? styles.wave2 :
                      i === 3 ? styles.wave3 :
                        i === 4 ? styles.wave4 :
                          styles.wave5,
                  authStatus === 'processing' && styles.pulsingWave
                ]} />
              ))}
            </View>
          </View>

          <View style={styles.statusContainer}>
            <Text style={[
              styles.statusText,
              authStatus === 'processing' && styles.processingText,
              authStatus === 'success' && styles.successText,
              authStatus === 'failed' && styles.failedText
            ]}>
              {authStatus === 'idle' && '等待脑波数据上传'}
              {authStatus === 'processing' && '正在分析脑波模式...'}
              {authStatus === 'success' && '认证成功！欢迎回来'}
              {authStatus === 'failed' && '认证失败，请重试'}
            </Text>
          </View>
        </View>

        {/* 文件选择区 */}
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFileUpload}
            disabled={authenticating}
          >
            <Text style={styles.uploadButtonText}>
              {fileInfo ? '重新选择脑波文件' : '选择脑波数据文件'}
            </Text>
          </TouchableOpacity>

          {fileInfo && (
            <View style={styles.fileInfoContainer}>
              <Text style={styles.fileNameText}>已选择: {fileInfo.name}</Text>
              <Text style={styles.fileNameText}>文件大小: {fileInfo.size ? (fileInfo.size / 1024).toFixed(2) : '0'} KB</Text>
            </View>
          )}
        </View>

        {/* 认证按钮 */}
        <TouchableOpacity
          style={[
            styles.authButton,
            (!fileInfo || authenticating) && { opacity: 0.5 },
            authStatus === 'success' && styles.successButton,
            authStatus === 'failed' && styles.failedButton
          ]}
          disabled={!fileInfo || authenticating}
          onPress={handleAuthenticate}
        >
          <Text style={styles.authButtonText}>
            {authenticating ? '认证中...' : '开始脑波认证'}
          </Text>
        </TouchableOpacity>

        {/* 底部文字 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>没有脑波档案? 登录时即为您注册</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BrainLogin;
