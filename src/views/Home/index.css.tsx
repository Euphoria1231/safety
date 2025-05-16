import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  headerNavigator: {
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: 'flex-start',
    boxSizing: 'border-box',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    boxSizing: 'border-box',
    flexDirection: 'row',
    width: 'auto',
  },
  infoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  footerIconStyle: {
    fontSize: 30,
    color: '#000',
  },
  mainContent: {
    flex: 1,
    overflow: 'hidden',
    gap: 30,
  },
  titleText: {
    color: '#A8A7A5',
    fontSize: 16,
    fontWeight: 600,
  },
  backToContainer: {
    gap: 20,
    flexDirection: 'column',
  },
  backToItemWrapper: {
    gap: 10,
    flexDirection: 'row',
  },
  noteListContainer: {
    gap: 10,
    flexDirection: 'column',
  },
  noteListWrapper: {
    gap: 10,
  },
});

export default style;
