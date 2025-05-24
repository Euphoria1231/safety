import { StatusBar, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './index.css';
import { Icon, Input, View, Text, Modal } from '@ant-design/react-native';
import SearchNoteList, { SearchNoteListItemProps } from '../../components/SearchNoteListItem';
import React, { useState, useMemo, useEffect } from 'react';
import useAuthGuard from '../../hooks/useAuthGuard';
import useNote from '../../hooks/useNote';

const Search: React.FC = () => {
  // 调用认证守卫钩子
  useAuthGuard();
  // 获取笔记列表
  const { noteList, refreshNoteList, loading } = useNote();
  // 搜索关键词
  const [searchKeyword, setSearchKeyword] = useState('');
  // 搜索结果
  const [filteredNotes, setFilteredNotes] = useState<any[]>([]);
  // 排序菜单可见性
  const [sortModalVisible, setSortModalVisible] = useState(false);
  // 排序方式
  const [sortMode, setSortMode] = useState('最佳匹配');



  const DateStrToDate = (theDateStr: string) => {
    const date = new Date(theDateStr);
    const nowDate = new Date();
    const gapDayms = nowDate.getTime() - date.getTime();
    const gapDay = Math.floor(gapDayms / 1000 / 24 / 60 / 60);
    if (gapDay === 0) { return 'today'; }
    else if (gapDay >= 1 && gapDay <= 7) { return 'this_week'; }
    else { return date.getMonth() + 1; }
  };

  // 处理搜索
  const handleSearch = (value: string) => {
    setSearchKeyword(value);
  };

  // 打开排序菜单
  const handleOpenSortMenu = () => {
    setSortModalVisible(true);
  };

  // 关闭排序菜单
  const handleCloseSortMenu = () => {
    setSortModalVisible(false);
  };

  // 选择排序方式
  const handleSelectSortMode = (mode: string) => {
    setSortMode(mode);
    setSortModalVisible(false);
  };

  // 使用笔记列表和搜索关键词来筛选结果
  useEffect(() => {
    if (!searchKeyword.trim()) {
      // 如果搜索关键词为空，使用完整的笔记列表
      setFilteredNotes(noteList);
    } else {
      // 根据关键词筛选笔记
      const filtered = noteList.filter(note =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  }, [searchKeyword, noteList]);

  // 将筛选后的笔记列表转换为搜索组件所需的格式
  const sortedNoteList = useMemo(() => {
    let result: SearchNoteListItemProps[] = [];

    // 将笔记数据转换为需要的格式
    let formattedNotes = filteredNotes.map(note => ({
      dateStr: note.updated_at || new Date().toISOString(),
      createdAt: note.created_at || new Date().toISOString(),
      data: {
        title: note.title,
        imageUrl: note.background_image || '',
        id: note.id
      }
    }));

    // 根据排序方式排序
    if (sortMode === '上次编辑：最新优先') {
      formattedNotes.sort((a, b) => new Date(b.dateStr).getTime() - new Date(a.dateStr).getTime());
    } else if (sortMode === '上次编辑：最早优先') {
      formattedNotes.sort((a, b) => new Date(a.dateStr).getTime() - new Date(b.dateStr).getTime());
    } else if (sortMode === '创建时间：最新优先') {
      formattedNotes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortMode === '创建时间：最早优先') {
      formattedNotes.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
    // '最佳匹配' 不做特殊排序，保持原有顺序

    // 分类处理
    formattedNotes.forEach(item => {
      const symbolKey = DateStrToDate(item.dateStr);
      const foundItem = result.find(itm => itm.symbol === symbolKey);

      if (foundItem) {
        foundItem.data.push(item.data);
      } else {
        result.push({
          symbol: symbolKey,
          data: [item.data],
        });
      }
    });

    return result;
  }, [filteredNotes, sortMode]);

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
            style={{ flex: 1 }}
            contentContainerStyle={styles.SearchNoteListWrapper}
            data={sortedNoteList}
            renderItem={({ item }) =>
              <SearchNoteList
                symbol={item.symbol}
                data={item.data}
              />}
            keyExtractor={(item, index) => `${item.symbol}-${index}`}
            refreshing={loading}
            onRefresh={refreshNoteList}
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
              value={searchKeyword}
              onChange={e => handleSearch(e.nativeEvent.text)}
            />
          </View>
          <TouchableOpacity onPress={handleOpenSortMenu}>
            <View style={styles.searchBarButton}>
              <Icon name="bars" style={{ fontWeight: 600 }} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 排序菜单弹窗 */}
        <Modal
          popup
          visible={sortModalVisible}
          animationType="slide-up"
          onClose={handleCloseSortMenu}
          maskClosable
        >
          <View style={styles.sortModalContainer}>
            <Text style={styles.sortModalTitle}>排序方式</Text>

            <TouchableOpacity
              style={styles.sortOption}
              onPress={() => handleSelectSortMode('最佳匹配')}
            >
              <Text style={styles.sortOptionText}>最佳匹配</Text>
              {sortMode === '最佳匹配' && <Icon name="check" color="#000" />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sortOption}
              onPress={() => handleSelectSortMode('上次编辑：最新优先')}
            >
              <Text style={styles.sortOptionText}>上次编辑：最新优先</Text>
              {sortMode === '上次编辑：最新优先' && <Icon name="check" color="#000" />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sortOption}
              onPress={() => handleSelectSortMode('上次编辑：最早优先')}
            >
              <Text style={styles.sortOptionText}>上次编辑：最早优先</Text>
              {sortMode === '上次编辑：最早优先' && <Icon name="check" color="#000" />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sortOption}
              onPress={() => handleSelectSortMode('创建时间：最新优先')}
            >
              <Text style={styles.sortOptionText}>创建时间：最新优先</Text>
              {sortMode === '创建时间：最新优先' && <Icon name="check" color="#000" />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sortOption}
              onPress={() => handleSelectSortMode('创建时间：最早优先')}
            >
              <Text style={styles.sortOptionText}>创建时间：最早优先</Text>
              {sortMode === '创建时间：最早优先' && <Icon name="check" color="#000" />}
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Search;
