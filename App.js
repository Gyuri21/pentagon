/*
 * File: app.js
 * Authors: Olah Janos Gergely & Hegedus Gyorgy
 * Copyright: 2021, Olah Janos Gergely & Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2022-01-03
 * Github: https://github.com/olahjg & https://github.com/Gyuri21
 * Licenc: GNU GPL
 */
import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import {TouchableHighlight, ImageBackground, StyleSheet, Text, View, TextInput} from 'react-native';

const image = { uri: "https://www.patternpictures.com/wp-content/uploads/Geometric-pentagon-shapes-sublte-white-background-seamless-pattern-patternpictures-0220.png" };

export default function App() {
  const[sidelenght,setSidelenght] = useState();
  const[area,setArea] = useState();

  function calcArea(){
      let result = Math.pow(sidelenght,2)*Math.sqrt(25+10*Math.sqrt(5))/4;
      setArea(result);
      
  }

  return (
    
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.texts}>Pentagon</Text>
      <TextInput placeholder = "Oldalhosszusag: " style = {styles.input} onChangeText={sidelenght => setSidelenght(sidelenght)}/>
      <TouchableHighlight
          style={styles.runButton}
          onPress={calcArea}
          >
          <Text style={styles.runText}>Számol</Text>
      </TouchableHighlight>
      <Text style={styles.results}>Terület</Text>
      <Text>{area}</Text>
      <StatusBar style="auto" />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input:{
    borderWidth:3,
    borderColor: "blue", 
    margin: 10,
    padding: 3,
    borderRadius: 4,
    width: '50%'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  texts:{
    fontSize: '180%',
    fontWeight: 'bold',
    color: 'blue'
  },
  results:{
    fontSize: '120%',
    color: 'blue',
    fontWeight: 'bold'
  },
  runButton: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 2,
    borderRadius: 3,
    justifyContent: 'center',
    width: '30%',
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  }
});
