import { Icon } from '@ant-design/react-native';
import { TouchableOpacity, Image } from 'react-native';
import { View, Text } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';
import { HomeListItemProps } from '../BackToItem';

const NoteListItem: React.FC<HomeListItemProps> = ({
  title,
  imageUrl,
  articleId = '1', // 默认ID，实际应用中应该提供真实ID
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

  return (
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
  );
};

export default NoteListItem;
