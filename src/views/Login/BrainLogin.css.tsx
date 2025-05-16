import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 100,
    justifyContent: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
  },
  backButtonText: {
    color: '#969696',
    fontSize: 24,
  },
  titleContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#161922',
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 16,
    color: '#11467CAA',
    fontStyle: 'italic',
  },
  brainwaveContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  brainImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    overflow: 'hidden',
  },
  brainAnimation: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animating: {
    backgroundColor: '#F2F7FF',
  },
  brainwave: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#11467CAA',
    borderRadius: 1,
  },
  wave1: {
    width: '60%',
    transform: [{ translateY: -40 }],
  },
  wave2: {
    width: '70%',
    transform: [{ translateY: -20 }],
  },
  wave3: {
    width: '80%',
  },
  wave4: {
    width: '70%',
    transform: [{ translateY: 20 }],
  },
  wave5: {
    width: '60%',
    transform: [{ translateY: 40 }],
  },
  pulsingWave: {
    backgroundColor: '#FE2C55',
  },
  statusContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
  },
  processingText: {
    color: '#11467CAA',
    fontWeight: '500',
  },
  successText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  failedText: {
    color: '#FE2C55',
    fontWeight: '600',
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#F9F9F9',
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    color: '#11467CAA',
    fontSize: 16,
  },
  fileInfoContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 4,
  },
  fileNameText: {
    color: '#666666',
    fontSize: 14,
  },
  authButton: {
    backgroundColor: '#FE2C55',
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  authButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successButton: {
    backgroundColor: '#4CAF50',
  },
  failedButton: {
    backgroundColor: '#FE2C55',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#999999',
    fontSize: 14,
  },
  linkText: {
    color: '#11467CAA',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;
