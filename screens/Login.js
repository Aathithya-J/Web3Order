import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TextInput } from 'react-native';


function Login(){
  const [text, onChangeText] = React.useState('Login');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text> 
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
export default Login;