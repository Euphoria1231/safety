import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  LoginTitleContainer: {
    marginBottom: 30,
  },
  LoginTitleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#161922',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#F9F9F9',
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#000',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#FE2C55',
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
