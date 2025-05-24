import { Icon } from '@ant-design/react-native';
import { TouchableOpacity, Image, Alert } from 'react-native';
import { View, Text } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';
import { HomeListItemProps } from '../BackToItem';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

interface NoteListItemProps extends HomeListItemProps {
  onDelete?: (id: string) => void;
}

const NoteListItem: React.FC<NoteListItemProps> = ({
  title,
  imageUrl,
  articleId = '1', // 默认ID，实际应用中应该提供真实ID
  onDelete,
}) => {
  const navigation = useNavigation<HomeNavigationProps>();

  const handleNavigateToArticle = () => {
    navigation.navigate('Article', {
      articleId,
      title,
      coverImage: imageUrl,
      author: {
        name: '用户名',
        avatar: '../../assets/images/avatar.jpg',
      },
      date: '2023年3月30日',
      content: '文章内容将通过articleId从后端加载...',
    });
  };

  const handleDelete = () => {
    Alert.alert(
      '确认删除',
      '确定要删除这条笔记吗？',
      [
        {
          text: '取消',
          style: 'cancel',
        },
        {
          text: '删除',
          onPress: () => onDelete && onDelete(articleId),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const renderRightActions = () => {
    return (
      <RectButton style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>删除</Text>
      </RectButton>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        style={styles.noteListItemContainer}
        activeOpacity={0.3}
        onPress={handleNavigateToArticle}>
        <View style={styles.noteListItemInfoContainer}>
          {/* 左侧头像加名称 */}
          <Image
            style={styles.noteListItemImage}
            source={require('../../assets/images/avatar.jpg')} />
          <Text style={styles.noteListItemText}>{title}</Text>
        </View>
        <Icon name="arrow-right" />
      </TouchableOpacity>
    </Swipeable>
  );
};

export default NoteListItem;
