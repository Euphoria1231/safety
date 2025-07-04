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
  modalContent: {
    padding: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  modalButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 80,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: '#ff4d4f',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  editButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 10,
  },
  editIcon: {
    fontSize: 20,
    color: '#333',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    marginBottom: 30,
    alignItems: 'center',
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  avatarContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  drawerAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarUploadOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    fontSize: 18,
    color: '#fff',
  },
  uploadText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  inputItem: {
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  drawerFooter: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    flex: 1,
    marginRight: 10,
  },
  drawerCancelButton: {
    flex: 1,
  },
});

export default styles;
