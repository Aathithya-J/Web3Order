import * as React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TextInput, Button,TouchableOpacity, TouchableHighlight, StatusBar} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Login from './Login';
import Landing from './Landing';

const Stack = createNativeStackNavigator();
function Newacc(){
  const [username, passwd,rpasswd, onChangeText] = React.useState('');
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create New Account</Text> 

      <TextInput
        style={styles.input}
        placeholder='New Username'
        onChangeText={onChangeText}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder='New Passowrd'
        onChangeText={onChangeText}
        value={passwd}
      />

      <TextInput
        style={styles.input}
        placeholder='Repeat New Passowrd'
        onChangeText={onChangeText}
        value={rpasswd}
      />

      <TouchableOpacity style={styles.radius} onPress={() => navigation.navigate("Landing")}>
        <Text style={styles.button}>Create Account?</Text>
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
    borderRadius: 13,
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
  
});

function Stacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Newacc" component={Newacc}/>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //Include all screens so as to link them
}

export default Newacc;