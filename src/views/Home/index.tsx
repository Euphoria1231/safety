import { FlatList, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './index.css';
import { View, Text } from '@ant-design/react-native';
import React from 'react';
import BackToItem, { HomeListItemProps } from '../../components/BackToItem';
import NoteListItem from '../../components/NoteListItem';
import useAuthGuard from '../../hooks/useAuthGuard';

const Home: React.FC = () => {
  // 调用认证守卫钩子
  useAuthGuard();

  const mockBackToData: HomeListItemProps[] = [
    {
      title: '大二下工作安排',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1001',
    },
    {
      title: '计算机设计大赛',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1002',
    },
    {
      title: '服务外包比赛',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1003',
    },
    {
      title: '学习计划安排',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1004',
    },
  ];

  const mockNoteData: HomeListItemProps[] = [
    {
      title: '大二下工作安排',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1001',
    },
    {
      title: '计算机设计大赛',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1002',
    },
    {
      title: '服务外包比赛',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1003',
    },
    {
      title: '学习计划安排',
      imageUrl: '../../assets/images/avatar.jpg',
      articleId: '1004',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>
        {/* 顶部个人信息 */}
        <TouchableOpacity
          style={styles.headerNavigator}
        >
          {/* 左侧个人信息栏 */}
          <View style={styles.infoContainer}>
            {/* 头像 */}
            <Image
              style={styles.infoImage}
              source={require('../../assets/images/avatar.jpg')} />
            {/* 个人信息文字栏 */}
            <Text style={styles.infoText}>ZCharles的Notion </Text>
          </View>
        </TouchableOpacity>

        {/* 主体内容 */}
        <View style={styles.mainContent}>
          {/* 查看历史记录栏 */}
          <View style={styles.backToContainer}>
            <View>
              <Text style={styles.titleText}> 跳回到</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.backToItemWrapper}
              data={mockBackToData}
              renderItem={({ item }) =>
                <BackToItem
                  title={item.title}
                  imageUrl={item.imageUrl}
                  articleId={item.articleId}
                />
              }
            />
          </View >
          <View style={styles.noteListContainer}>
            <View>
              <Text style={styles.titleText} >笔记列表</Text>
            </View>
            <FlatList
              data={mockNoteData}
              renderItem={({ item }) =>
                <NoteListItem
                  title={item.title}
                  imageUrl={item.imageUrl}
                  articleId={item.articleId}
                />}
              contentContainerStyle={styles.noteListWrapper}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
