import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  headerNavigator: {
    paddingTop: 10,
    alignItems: 'flex-start',
    boxSizing: 'border-box',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    padding: 5,
  },
  actionButton: {
    padding: 5,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 600,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    color: '#000',
    backgroundColor: 'rgba(242,241,239, 1)',
  },
  titleInput: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
    padding: 10,
  },
  inputStyle: {
    height: 60,
    fontSize: 24,
    fontWeight: 600
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    boxSizing: 'border-box',
  },
  contentPlaceholder: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  contentText: {
    fontSize: 16,
    color: '#000',
    height: 40,
  },
});

export default styles;
