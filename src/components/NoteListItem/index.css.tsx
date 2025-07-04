import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  noteListItemContainer: {
    width: '100%',
    height: 45,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  noteListItemInfoContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    height: '100%',
  },
  noteListItemImage: {
    width: 30,
    height: 30,
  },
  noteListItemText: {
    fontSize: 15,
    fontWeight: 500,
  },
  deleteButton: {
    backgroundColor: '#dd2150',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
