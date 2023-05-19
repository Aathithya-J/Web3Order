import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TextInput, Button,TouchableOpacity, TouchableHighlight, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Landing(){
  const [rpasswd, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.title}>Landing</Text> 
      <TextInput
        style={styles.input}
        placeholder='Search'
        onChangeText={onChangeText}
        value={rpasswd}
      />
            </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'row',
    justifyContent: 'center',
  },
  title: {
    color: "black",
    fontSize:20,
    fontWeight:700,
    paddingTop: 15,
    alignSelf:'flex-start',
    paddingLeft: 10,
    //Landing Text
  },
  input:{
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    alignSelf:'flex-end',
    backgroundColor: '#B08968',
    color:'white'
  },

})
export default Landing;