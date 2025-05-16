import { Icon } from '@ant-design/react-native';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { BackToItemProps } from '../BackToItem';
import styles from './index.css';

const NoteListItem: React.FC<BackToItemProps> = ({ title, imageUrl }) => {
  return (
    <TouchableOpacity
      style={styles.noteListItemContainer}
      activeOpacity={0.3}>
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
