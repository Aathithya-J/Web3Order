import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TextInput, Button,TouchableOpacity, TouchableHighlight, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login(){
  const [username, passwd, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text> 
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={onChangeText}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder='Passowrd'
        onChangeText={onChangeText}
        value={passwd}
      />
      <TouchableOpacity style={styles.radius}>
        <Text style={styles.button}>Sign in?</Text>
      </TouchableOpacity>
      {/*Button for signing in*/}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "black",
    fontSize:35,
    fontWeight:700,
    paddingBottom: 20,
    
  },
  input:{
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#B08968',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    width: 250,
    textAlign: 'center',
    paddingVertical: 10
    //Button for Login & Create Account
  },
  radius: {
    backgroundColor: "#9C6644",
    border: "none",
    borderRadius: 200,
    borderWidth: 0
    //Button radiis
  },
})
export default Login;