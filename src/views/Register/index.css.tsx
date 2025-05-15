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
  registerTitleContainer: {
    marginBottom: 30,
  },
  registerTitleText: {
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
  registerButton: {
    backgroundColor: '#FE2C55',
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
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
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: '#FE2C55',
    borderColor: '#FE2C55',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  agreementText: {
    fontSize: 12,
    color: '#999999',
    flex: 1,
  },
  agreementLink: {
    color: '#11467CAA',
  },
});

export default styles;
