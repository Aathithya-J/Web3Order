import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TextInput, Button,TouchableOpacity, TouchableHighlight, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Landing(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Landing</Text> 
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

})
export default Landing;