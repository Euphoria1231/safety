import { TouchableOpacity, Image } from 'react-native';
import { View, Text } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from '../../types/App';
import styles from './index.css';

export interface HomeListItemProps {
  title: string,
  imageUrl: string,
  articleId?: string
}

const BackToItem: React.FC<HomeListItemProps> = ({
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
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={styles.backToItemContainer}
      onPress={handleNavigateToArticle}>
      {/* TODO: 背景图，有时间就弄，没时间算了 */}
      <View style={styles.backToItemBackgroundImage} />
      {/* 头像 */}
      <Image
        style={styles.backToItemAvatar}
        source={require('../../assets/images/avatar.jpg')} />
      {/* 标题 */}
      <View style={styles.backToItemTextBackgroundImage}>
        <Text style={styles.backToItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackToItem;
