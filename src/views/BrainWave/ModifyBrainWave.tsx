import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, SafeAreaView, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './ModifyBrainWave.css.tsx';
import { DocumentPickerResponse, pick } from '@react-native-documents/picker';

import { View, Text, Toast } from '@ant-design/react-native';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../contexts/Auth';

const ModifyBrainWave: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [fileInfo, setFileInfo] = useState<DocumentPickerResponse | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const { state } = useContext(AuthContext);
  const { user } = state;

  const { updateBrainWave } = useAuth();

  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user, navigation]);

  // 文件选择功能
  const handleFileUpload = () => {
    Alert.alert(
      '选择脑波数据文件',
      '请选择要上传的新脑波数据文件',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '选择文件',
          onPress: async () => {
            try {
              const [pickResult] = await pick();
              setFileInfo(pickResult);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]
    );
  };

  // 上传处理
  const handleUpdateBrainWave = async () => {
    if (!fileInfo) {
      Alert.alert('请选择脑波数据文件');
      return;
    }

    setUploading(true);
    setUploadStatus('processing');

    try {
      // 这里使用现有的brainLogin方法，实际项目中应当创建专门的更新方法
      await updateBrainWave(fileInfo);
      setUploadStatus('success');
      Toast.success('脑波数据更新成功');
      setTimeout(() => {
        navigation.goBack();
      }, 1500);
    } catch (err) {
      console.error(err);
      setUploadStatus('failed');
      Alert.alert('更新失败', '请检查您的脑波数据文件是否正确');
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <View style={styles.content}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>更新脑波数据</Text>
          <Text style={styles.subtitleText}>Mind Guardian</Text>
        </View>

        {/* 脑波视觉元素 */}
        <View style={styles.brainwaveContainer}>
          <View style={styles.brainImageContainer}>
            <View style={[styles.brainAnimation, uploadStatus === 'processing' && styles.animating]}>
              {[1, 2, 3, 4, 5].map(i => (
                <View key={i} style={[
                  styles.brainwave,
                  i === 1 ? styles.wave1 :
                    i === 2 ? styles.wave2 :
                      i === 3 ? styles.wave3 :
                        i === 4 ? styles.wave4 :
                          styles.wave5,
                  uploadStatus === 'processing' && styles.pulsingWave,
                ]} />
              ))}
            </View>
          </View>

          <View style={styles.statusContainer}>
            <Text style={[
              styles.statusText,
              uploadStatus === 'processing' && styles.processingText,
              uploadStatus === 'success' && styles.successText,
              uploadStatus === 'failed' && styles.failedText,
            ]}>
              {uploadStatus === 'idle' && '等待选择新的脑波数据文件'}
              {uploadStatus === 'processing' && '正在更新脑波数据...'}
              {uploadStatus === 'success' && '更新成功！'}
              {uploadStatus === 'failed' && '更新失败，请重试'}
            </Text>
          </View>
        </View>

        {/* 文件选择区 */}
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFileUpload}
            disabled={uploading}
          >
            <Text style={styles.uploadButtonText}>
              {fileInfo ? '重新选择脑波文件' : '选择新的脑波数据文件'}
            </Text>
          </TouchableOpacity>

          {fileInfo && (
            <View style={styles.fileInfoContainer}>
              <Text style={styles.fileNameText}>已选择: {fileInfo.name}</Text>
              <Text style={styles.fileNameText}>文件大小: {fileInfo.size ? (fileInfo.size / 1024).toFixed(2) : '0'} KB</Text>
            </View>
          )}
        </View>

        {/* 更新按钮 */}
        <TouchableOpacity
          style={[
            styles.updateButton,
            (!fileInfo || uploading) && { opacity: 0.5 },
            uploadStatus === 'success' && styles.successButton,
            uploadStatus === 'failed' && styles.failedButton,
          ]}
          disabled={!fileInfo || uploading}
          onPress={handleUpdateBrainWave}
        >
          <Text style={styles.updateButtonText}>
            {uploading ? '更新中...' : '更新脑波数据'}
          </Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>
  );
};

export default ModifyBrainWave; 