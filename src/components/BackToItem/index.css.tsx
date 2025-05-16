import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // --------跳回到选择项----------
  backToItemContainer: {
    width: 150,
    height: 130,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F2F1EF99',
  },
  backToItemBackgroundImage: {
    width: '100%',
    height: '50%',
    backgroundColor: '#F2F1EF',
  },
  backToItemAvatar: {
    position: 'absolute',
    width: 30,
    height: 30,
    zIndex: 1000,
    top: '50%',
    left: '10%',
    transform: 'translateY("-20%")',
  },
  backToItemTextBackgroundImage: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 15,
  },
  backToItemText: {
    fontWeight: 600,
  },
});

export default styles;
