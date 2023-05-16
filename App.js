import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image, Link } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
function App() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Tea.png')}/>
      <Text style={styles.title}>brew perfect tea!</Text>
      <TouchableHighlight style={styles.radius}>
        <Text style={styles.button}>Sign Up?</Text>
      </TouchableHighlight>
      <Button title='dont have an account?' />
      <TouchableOpacity style={styles.radius} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.button}>Login?</Text>
      </TouchableOpacity>
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
    paddingBottom: 20,
    
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

function Stacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stacks
