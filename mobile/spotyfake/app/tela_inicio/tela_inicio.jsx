import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';


const Capa = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SpotyFake</Text>

      <Text  style={styles.subtitulo}> Bem vindo ao</Text>

      <View style={styles.buttonWrapper}>
      
      <Link href="registre/registro" asChild>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Fazer Registro</Text>
        </TouchableOpacity>
      </Link>
      <Link href="login/FazerLogin" asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>        
      </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
  },
  subtitulo:{
    fontSize: 22,
    color: '#000',
    marginBottom: 7,
  },
  buttonWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',  
    paddingHorizontal: 50, 
    paddingVertical: 170, 
    position: 'absolute',
    bottom: 0, 
    height: 10, 
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 20,
    borderRadius: 5, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 23,
    marginRight: 10, 
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#fff', 
    borderRadius: 5, 
    borderColor: '#000', 
    borderWidth: 1,
    paddingVertical: 22,
    paddingHorizontal: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Capa;