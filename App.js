import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const[sidelenght,setSidelenght] = useState();
  const[area,setarea] = useState();

  function calcArea(){
      let result = Math.pow(sidelenght,2)*Math.sqrt(25+10*Math.sqrt(5))/4;
      setarea(result);
      
  }

  return (
    <View style={styles.container}>
      <Text>Pentagon</Text>
      <Text>Oldalhosszusag</Text>
      <TextInput placeholder = "Oldalhosszusag: " style = {styles.input} onChangeText={sidelenght => setSidelenght(sidelenght)}/>
      <Button 
      title= "Számol"
      onPress = {calcArea}
      />
      <Text>Terület</Text>
      <Text>{area}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input:{
    borderWidth:2,
    width: '80%',
    borderColor: "blue", 
    margin: 8,
    width: 500,
    padding: 4
  },
});
