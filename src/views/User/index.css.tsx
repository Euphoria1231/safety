import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  userInfoContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#A8A7A5',
  },
  userOptionsContainer: {
    flex: 1,
    marginTop: 30,
  },
  sectionTitle: {
    color: '#A8A7A5',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  optionsWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  optionIcon: {
    fontSize: 20,
    color: '#666',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  arrowIcon: {
    fontSize: 16,
    color: '#CCCCCC',
  },
});

export default styles;
