import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image, Link } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Tea.png')}
        />
      <Text style={styles.title}>brew perfect tea!</Text>
      <TouchableHighlight style={styles.radius}>
        <Text style={styles.button}>Sign Up?</Text>
      </TouchableHighlight>
      <Button title='dont have an account?' />
      <TouchableHighlight style={styles.radius}>
        <Text style={styles.button}>Login?</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150
  },
  title: {
    color: "black",
    fontSize:35,
    fontWeight:700,
    paddingBottom: 20
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 100,
    paddingVertical: 10
  },
  radius: {
    backgroundColor: "#9C6644",
    border: "none",
    borderRadius: 200,
    borderWidth: 0
  },
});
