import * as React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TextInput } from 'react-native';


function Create(){
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create</Text> 
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={onChangeText}
        value={text}
      />
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
export default Create;