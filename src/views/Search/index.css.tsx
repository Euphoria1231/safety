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
  searchContainer: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#F8F8F6',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '80%',
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  searchBarButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SearchNoteListContainer: {
    flex: 1,
  },
  SearchNoteListWrapper: {
    gap: 15,
  },
  
});

export default styles;
