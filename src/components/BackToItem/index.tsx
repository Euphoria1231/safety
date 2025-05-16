import { TouchableOpacity, Image } from 'react-native';
import { View, Text } from '@ant-design/react-native';
import styles from './index.css';

export interface HomeListItemProps {
  title: string,
  imageUrl: string
}
const BackToItem: React.FC<HomeListItemProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={styles.backToItemContainer}>
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
