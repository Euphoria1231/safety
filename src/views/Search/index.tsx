import { StatusBar, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './index.css';
import { Icon, Input, View } from '@ant-design/react-native';
import SearchNoteList, { SearchNoteListItemProps } from '../../components/SearchNoteListItem';
import React from 'react';
import useAuthGuard from '../../hooks/useAuthGuard';

const Search: React.FC = () => {
  // 调用认证守卫钩子
  useAuthGuard();

  const DateStrToDate = (theDateStr: string) => {
    const date = new Date(theDateStr);
    const nowDate = new Date();
    const gapDayms = nowDate.getTime() - date.getTime();
    const gapDay = Math.floor(gapDayms / 1000 / 24 / 60 / 60);
    if (gapDay === 0) { return 'today'; }
    else if (gapDay >= 1 && gapDay <= 7) { return 'this_week'; }
    else { return date.getMonth() + 1; }
  };
  // 模拟数据
  const mockNoteList: {
    dateStr: string,
    data: {
      title: string,
      imageUrl: string
    }
  }[] = [
      {
        dateStr: '2025-5-16',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
      {
        dateStr: '2025-5-8',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
      {
        dateStr: '2025-4-16',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
      {
        dateStr: '2025-4-16',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
      {
        dateStr: '2025-4-16',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
      {
        dateStr: '2025-4-16',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
      {
        dateStr: '2025-4-16',
        data: {
          title: '大二工作安排',
          imageUrl: '',
        },
      },
    ];

  // 将 date 不同的数据根据 symbol 分类，因为 flatList 只能渲染单个数据，只能把数组变成一组
  let sortedNoteList: SearchNoteListItemProps[] = [];
  mockNoteList.forEach(item => {
    const foundItem = sortedNoteList.find(itm => itm.symbol === DateStrToDate(item.dateStr));
    if (foundItem) {
      foundItem.data.push(item.data);
    } else {
      sortedNoteList.push({
        symbol: DateStrToDate(item.dateStr),
        data: [item.data],
      });
    }
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        {/* main content */}
        <View style={styles.content}>
          {/* 可以排序的笔记列表 */}
          <FlatList
            style={styles.SearchNoteListContainer}
            contentContainerStyle={styles.SearchNoteListWrapper}
            data={sortedNoteList}
            renderItem={({ item }) =>
              <SearchNoteList
                symbol={item.symbol}
                data={item.data}
              />}
          />
        </View>
        {/* 搜索列表 */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Input
              style={styles.searchInput}
              placeholder="搜索"
              placeholderTextColor="#CCCCCC"
              prefix={<Icon name="search" color="#CCCCCC" />}
              styles={{
                input: { height: '100%', paddingBottom: 0 },
              }}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.searchBarButton}>
              <Icon name="bars" style={{ fontWeight: 600 }} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Search;
