import { FlatList, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './index.css';
import { View, Text } from '@ant-design/react-native';
import React from 'react';
import BackToItem, { HomeListItemProps } from '../../components/BackToItem';
import NoteListItem from '../../components/NoteListItem';
const Home: React.FC = () => {
  const mockBackToData: HomeListItemProps[] = [
    {
      title: '大二下工作安排',
      imageUrl: '../../assets/images/avatar.jpg',
    },
    {
      title: '大二下工作安排',
      imageUrl: '../../assets/images/avatar.jpg',
    },
    {
      title: '大二下工作安排',
      imageUrl: '../../assets/images/avatar.jpg',
    },
    {
      title: '大二下工作安排',
      imageUrl: 'require("../../assets/images/avatar.jpg")',
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
                />
              }
            />
          </View >
          <View style={styles.noteListContainer}>
            <View>
              <Text style={styles.titleText} >笔记列表</Text>
            </View>
            <FlatList
              data={mockBackToData}
              renderItem={({ item }) =>
                <NoteListItem
                  title={item.title}
                  imageUrl={item.imageUrl}
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
