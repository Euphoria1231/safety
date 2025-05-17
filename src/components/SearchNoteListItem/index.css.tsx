import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SearchNoteListItemContainer: {
    gap: 10,
  },
  SearchNoteListTitleText: {
    fontWeight: 600,
    color: '#999999',
    fontSize: 16,
  },
  SearchNoteListItemContentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  SeachNoteListItemUnitContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,

  },
  SeachNoteListItemUnitImage: {
    width: 30,
    height: 30,
  },
  SeachNoteListItemUnitText: {
    fontWeight: 500,
  },
});

export default styles;