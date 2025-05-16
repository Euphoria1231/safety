import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./index.css";

export interface SearchNoteListItemProps {
  symbol: string | number,
  data: {
    title: string,
    imageUrl: string
  }[]
}

const SearchNoteList: React.FC<SearchNoteListItemProps> = ({ symbol, data }) => {
  // 确定本周时间
  const Title =
    symbol === 'today' ? '今天' :
      symbol === 'this_week' ? '本周' :
        `${symbol}月`;
  return (
    <View style={styles.SearchNoteListItemContainer}>
      <Text style={styles.SearchNoteListTitleText}>
        {Title}
      </Text>
      <View style={styles.SearchNoteListItemContentWrapper}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.SeachNoteListItemUnitContainer,
              index !== data.length - 1 && {
                borderBottomColor: '#999',
                borderBottomWidth: 0.5,
              }]}>
            <Image
              style={styles.SeachNoteListItemUnitImage}
              source={require('../../assets/images/avatar.jpg')} />
            <Text style={styles.SeachNoteListItemUnitText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchNoteList;