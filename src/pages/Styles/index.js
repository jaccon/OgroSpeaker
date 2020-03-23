
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerConfig: {
    backgroundColor: '#4630EB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    color: '#666666',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ccc',
    height: 44,
    marginBottom: 20,
    borderRadius: 6
  },

  inputNeg: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ccc',
    height: 44,
    marginBottom: 20,
    borderRadius: 6
  },

  buttonConfig: {
    height: 42,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 20,
    
  },

  button: {
    height: 42,
    backgroundColor: '#4630EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  buttonConfigNeg: {
    height: 42,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    
  },

  buttonNeg: {
    height: 42,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  
  buttonTextNeg: {
    color: '#ffffff',
    fontSize: 16,
  },

  buttonText2Neg: {
    color: '#4630EB',
    fontSize: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  buttonText2: {
    color: '#4630EB',
    fontSize: 16,
  },

  logo: {
    marginBottom: 5,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  apiText: {
    marginTop: 20,
    color: '#666666',
    alignContent: 'center',
    alignSelf: 'center',
  },

  credits: {
    marginTop: 20,
    color: '#fff',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 12
  },

  apiTextNeg: {
    marginTop: 40,
    color: '#fff',
    alignContent: 'center',
    alignSelf: 'center',
  }
});

export default styles;