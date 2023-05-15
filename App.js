import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#DDB982'}}>
    <View>
      <Text style={{
        color: "black", 
        textAlign: 'center', 
        paddingTop: 100, 
        fontSize:40, 
        fontWeight:'bold'
        }}>your perfect Brew!
      </Text>  
      <Text style={{
        color: "black", 
        textAlign: 'center', 
        paddingBottom:10, 
        fontSize:20, 
        }}>lorem ipusm!
      </Text>  
      <StatusBar style="auto"/>
      <Button title="sign in" color="#841584"/>
      <Button title="dont have an account?" color="#841584"/>
      <Button title="create account" color="#841584"/>
    </View>
  </SafeAreaView>
  );
}
