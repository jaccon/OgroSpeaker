import React, { useState, useEffect } from 'react';

import { 
  View, 
  Alert,
  AsyncStorage, 
  KeyboardAvoidingView, 
  Platform, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Linking,
  StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

import styles from '../Styles';

import Footer from '../Footer';

export default function Config({ navigation }) {

  const [ip, setIp] = useState('');
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

  function handleSend() {
    navigation.navigate('Main');
  }

  function handleManual() {
    navigation.navigate('Main');
  }

  async function handleSubmit() {
    
    await AsyncStorage.setItem('settingIp', ip);
    
    Alert.alert(`Configurações salvas com sucesso`);

    navigation.navigate('Main');

  }
  
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.containerConfig}>

      <Image source={logo} style={styles.logo} />

      <View style={styles.form}>
        

        <TextInput
          style={styles.input}
          placeholder="Digite o endereço da API"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={ip}
          onChangeText={setIp}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.buttonNeg}>
          <Text style={styles.buttonText}> Salvar </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/jaccon/GoogleHomeSpeakerTTs')}} style={styles.buttonConfig}>
          <Text style={styles.buttonTextNeg}> Manual de Configuração API </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSend} style={styles.buttonConfig}>
          <Text style={styles.buttonTextNeg}> Enviar Mensagem </Text>
        </TouchableOpacity>

        {confIp ? (
            <Text style={styles.apiTextNeg}> Conectado a API {confIp}</Text>
            ) : (
              <Text style={styles.apiTextNeg}> Api não configurada </Text>
          )}

        <Footer />

      </View>
    </KeyboardAvoidingView>
  );

}

