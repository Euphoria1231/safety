import { SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import styles from './index.css';
import { View, Icon, Input } from '@ant-design/react-native';
import React, { useState, useRef } from 'react';
// TODO: 更换为富文本编辑器
const Edit: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [_isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);


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
              <TouchableOpacity style={styles.backButton}>
                <Icon name="arrow-left" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionButtonText}>完成</View>
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
              }
            }}
            styles={{
              container: { borderWidth: 0, borderBottomWidth: 0 },
              input: styles.inputStyle,
            }}
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
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Edit;
