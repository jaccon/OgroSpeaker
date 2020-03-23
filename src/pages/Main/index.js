import React, { useState, useEffect } from 'react';

import { 
  View, 
  AsyncStorage, 
  KeyboardAvoidingView, 
  Platform, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';
  import axios from 'axios';

  import logo from '../../assets/logo.png';
  
  import styles from '../Styles';

  import Footer from '../Footer';

  export default function Main({ navigation }) {

    const [message, setMessage] = useState('');
    const [confIp, setConfIp] = useState('');

    useEffect(() => {
      AsyncStorage.getItem('settingIp').then(settingIp => {
        if (settingIp) {
          setConfIp(settingIp);
        }else{
          setConfIp('Não configurado');
        }
      })
    }, []);

    async function handleSubmit() {

      const response = await axios.post(`${confIp}/speak/send`, {
        message
      }, {
        headers: {
          authorization : 'likaek3iugh7Apei0ohz3jee7raet3Kah6ImaeTaiy0xe7Mie6edie3ahthi',
          language: 'pt',
          speed: 1
        }
      });

    }

    function handleConfig() {
      navigation.navigate('Config');
    }

    return (
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>

        <Image source={logo} style={styles.logo} />
        
        <View style={styles.form}>

          <TextInput
            style={styles.input}
            placeholder="Digite a mensagem ..."
            placeholderTextColor="#ccc"
            autoCapitalize="none"
            autoCorrect={false}
            value={message}
            onChangeText={setMessage}
            maxLength={280}
          />
  
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}> Enviar para Speaker </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleConfig} style={styles.buttonConfig}>
            <Text style={styles.buttonText}> Configurar </Text>
          </TouchableOpacity>
        
          <Footer />


        </View>
      </KeyboardAvoidingView>
    );

  }

 