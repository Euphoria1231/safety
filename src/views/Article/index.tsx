import { SafeAreaView, StatusBar, ScrollView, Text, Image, ActivityIndicator } from 'react-native';
import styles from './index.css';
import { View } from '@ant-design/react-native';
import React, { useEffect, useState } from 'react';
import useAuthGuard from '../../hooks/useAuthGuard';
import useNote from '../../hooks/useNote';

interface ArticleProps {
  route?: {
    params: {
      articleId: string;
      title?: string;
      content?: string;
      author?: {
        avatar: string;
        name: string;
      };
      coverImage?: string;
      date?: string;
    }
  };
}

const Article: React.FC<ArticleProps> = ({ route }) => {
  // 调用认证守卫钩子
  useAuthGuard();
  const { getNoteDetailById } = useNote();

  const [loading, setLoading] = useState(true);
  const [articleData, setArticleData] = useState(route?.params || {
    title: '加载中...',
    content: '文章内容加载中...',
    author: {
      avatar: '../../assets/images/avatar.jpg',
      name: '用户名',
    },
    coverImage: '../../assets/images/avatar.jpg',
    date: '加载中...',
  });

  useEffect(() => {
    // 根据articleId从API获取文章详情
    const fetchArticleData = async () => {
      if (route?.params?.articleId) {
        try {
          setLoading(true);

          // 调用获取笔记详情的接口
          const noteDetail = await getNoteDetailById(route.params.articleId);

          if (noteDetail) {
            // 更新状态
            setArticleData({
              ...route.params,
              title: noteDetail.title,
              content: noteDetail.content || '无内容',
              coverImage: noteDetail.background_image || route.params.coverImage,
              date: formatDate(noteDetail.created_at),
            });
          }
        } catch (error) {
          console.error('获取文章数据失败:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [route?.params, getNoteDetailById]);

  // 格式化日期
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>加载中...</Text>
          </View>
        ) : (
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.mainContent}>
              {/* 头部背景图和作者信息 */}
              <View style={styles.headerImageContainer}>
                <Image
                  source={
                    articleData.coverImage && articleData.coverImage.startsWith('http')
                      ? { uri: articleData.coverImage }
                      : require('../../assets/images/avatar.jpg')
                  }
                  style={styles.headerImage}
                />
                <View style={styles.authorContainer}>
                  <View style={styles.avatarContainer}>
                    <Image
                      source={require('../../assets/images/avatar.jpg')}
                      style={styles.avatarImage}
                    />
                  </View>
                  <View style={styles.authorInfo}>
                    <Text style={styles.authorDate}>{articleData.date}</Text>
                  </View>
                </View>
              </View>

              {/* 文章标题 */}
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{articleData.title}</Text>
              </View>

              {/* 文章内容区域 */}
              <View style={styles.contentContainer}>
                <Text style={styles.articleText}>
                  {articleData.content}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Article;
