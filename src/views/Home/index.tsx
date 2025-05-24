import { FlatList, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './index.css';
import { View, Text } from '@ant-design/react-native';
import React from 'react';
import BackToItem from '../../components/BackToItem';
import NoteListItem from '../../components/NoteListItem';
import useAuthGuard from '../../hooks/useAuthGuard';
import useNote from '../../hooks/useNote';

const Home: React.FC = () => {
  // 调用认证守卫钩子
  useAuthGuard();
  // 获取笔记列表和刷新函数
  const { noteList, refreshNoteList, loading, deleteNoteById } = useNote();

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
              data={noteList}
              renderItem={({ item }) =>
                <BackToItem
                  title={item.title}
                  imageUrl={item.background_image || '../../assets/images/avatar.jpg'}
                  articleId={item.id || item.articleId}
                />
              }
            />
          </View >
          <View style={styles.noteListContainer}>
            <View>
              <Text style={styles.titleText} >笔记列表</Text>
            </View>
            <FlatList
              style={{ flex: 1 }}
              data={noteList}
              renderItem={({ item }) =>
                <NoteListItem
                  title={item.title}
                  imageUrl={item.background_image || '../../assets/images/avatar.jpg'}
                  articleId={item.id || item.articleId}
                  onDelete={deleteNoteById}
                />}
              contentContainerStyle={styles.noteListWrapper}
              keyExtractor={item => item.id.toString()}
              refreshing={loading}
              onRefresh={refreshNoteList}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
