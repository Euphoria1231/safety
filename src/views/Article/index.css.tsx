import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F6',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    paddingBottom: 20,
  },
  headerNavigator: {
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    zIndex: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
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
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  headerImageContainer: {
    height: 250,
    width: '100%',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  authorInfo: {
    marginLeft: 10,
    paddingTop: 20,
    alignItems: 'flex-end',
  },
  authorDate: {
    fontSize: 14,
    color: '#888999',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  titleContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginHorizontal: 30,
    paddingBottom: 40,
  },
  articleText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#007AFF',
  },
});

export default styles;
