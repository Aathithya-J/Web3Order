import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image, Link } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import newacc from './screens/newacc';

const Stack = createNativeStackNavigator();
function App() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Tea.png')}/> 
      {/*Image for the cup above*/}

      <Text style={styles.title}>brew perfect tea!</Text>
      <TouchableHighlight style={styles.radius} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.button}>Sign In?</Text>
      </TouchableHighlight>
      {/*Button for sign up*/}

      <Button title='dont have an account?' onPress={() => navigation.navigate("Create")}/>
      <TouchableOpacity style={styles.radius} onPress={() => navigation.navigate("Create")}>
        <Text style={styles.button}>create account?</Text>
      </TouchableOpacity>
      {/*Button for login up*/}
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
    //Container is the whole screen with the stuff inside
  },
  title: {
    color: "black",
    fontSize:35,
    fontWeight:700,
    paddingBottom: 20,
    //Title of "Brew Perfect tea"
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 250,
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
});

function Stacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Create" component={newacc}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  //Include all screens so as to link them
}

export default Stacks
//include export defua
