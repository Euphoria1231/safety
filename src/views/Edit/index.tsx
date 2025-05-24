import { SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native';
import styles from './index.css';
import { View, Icon, Input, Toast } from '@ant-design/react-native';
import React, { useState, useRef } from 'react';
import useAuthGuard from '../../hooks/useAuthGuard';
import useNote from '../../hooks/useNote';
import { useNavigation } from '@react-navigation/native';
// TODO: 更换为富文本编辑器
const Edit: React.FC = () => {
  // 调用认证守卫钩子
  useAuthGuard();
  const navigation = useNavigation();
  const { createNote } = useNote();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [_isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const handleSave = async () => {
    if (!title.trim()) {
      Toast.fail('请输入笔记标题');
      return;
    }

    setLoading(true);
    try {
      console.log('提交笔记数据:', { title: title.trim(), content: content.trim() });
      const result = await createNote({
        title: title.trim(),
        content: content.trim(),
      });

      console.log('笔记创建结果:', result);
      Toast.success('笔记创建成功');
      navigation.goBack();
    } catch (error: any) {
      console.error('创建笔记失败', error);

      // 显示更友好的错误信息
      Alert.alert(
        '创建笔记失败',
        error.message || '服务器暂时无法响应，请稍后再试',
        [{ text: '确定' }]
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <View style={styles.content}>
          {/* 顶部导航栏 */}
          <View style={styles.headerNavigator}>
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={handleSave}
                disabled={loading}
              >
                <View style={styles.actionButtonText}>{loading ? '保存中...' : '完成'}</View>
              </TouchableOpacity>
            </View>
          </View>

          {/* 标题输入框 */}
          <Input
            style={styles.titleInput}
            placeholder="页面标题"
            placeholderTextColor="#CCCCCC"
            value={title}
            onChange={event => {
              const text = event.nativeEvent?.text;
              if (text !== undefined) {
                setTitle(text);
                console.log('title', title);
                console.log('text', text);
              }
            }}
            styles={{
              container: { borderWidth: 0, borderBottomWidth: 0 },
              input: styles.inputStyle,
            }}
            editable={!loading}
          />

          {/* 正文内容区域 */}
          <View style={styles.contentContainer}>
            <Input
              ref={textInputRef}
              styles={{
                input: styles.contentText,
              }}
              multiline
              placeholder="轻点此处继续..."
              placeholderTextColor="#CCCCCC"
              value={content}
              onChangeText={setContent}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              editable={!loading}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Edit;
