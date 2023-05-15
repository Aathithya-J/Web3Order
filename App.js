import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={{color: "red", textAlign: 'center', paddingTop: 100, fontSize:20}}>Welcome to MathX!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}
