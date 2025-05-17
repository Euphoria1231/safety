import { SafeAreaView, StatusBar, ScrollView, Text, Image } from 'react-native';
import styles from './index.css';
import { View } from '@ant-design/react-native';
import React, { useEffect, useState } from 'react';

interface ArticleProps {
  route?: {
    params: {
      articleId: string;
      title?: string;
      content?: string;
      author?: {
        avatar: string;
      };
      coverImage?: string;
      date?: string;
    }
  };
}

const Article: React.FC<ArticleProps> = ({ route }) => {
  const [articleData, setArticleData] = useState(route?.params || {
    title: '加载中...',
    content: '文章内容加载中...',
    author: {
      avatar: 'https://via.placeholder.com/60',
    },
    coverImage: 'https://via.placeholder.com/400x250',
    date: '202312年3月303日 13213',
  });

  useEffect(() => {
    // 这里可以根据articleId从API获取文章详情
    const fetchArticleData = async () => {
      if (route?.params?.articleId) {
        try {
          // 模拟API调用，实际应用中应替换为真实的API调用
          // const response = await fetch(`/api/articles/${route.params.articleId}`);
          // const data = await response.json();

          // 模拟数据
          const mockArticleData = {
            ...(route.params || {}),
            content: `文章ID: ${route.params.articleId}\n\n嫣情的话也不多说了，如今开学已经过了一周，我也该收心学习了，这学期感觉状态不对劲，一定要迅速恢复。\n\n第一阶段（竞赛篇）\n\n计算机设计大赛和服务外包交稿在即，我不能再拖延了。\n\n3.1 计划\n\n服务外包四组静态页面；完成两组，剩下的下午调整细节。\n\n这个版本更新了一些细节，希望大家喜欢！`,
          };

          // 更新状态
          setArticleData(mockArticleData);
        } catch (error) {
          console.error('获取文章数据失败:', error);
        }
      }
    };

    fetchArticleData();
  }, [route?.params]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContent}>
            {/* 头部背景图和作者信息 */}
            <View style={styles.headerImageContainer}>
              <Image
                source={require('../../assets/images/avatar.jpg')}
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
      </View>
    </SafeAreaView>
  );
};

export default Article;
