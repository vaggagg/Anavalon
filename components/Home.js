import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { ButtonContainer, Filler, Label } from '../helpers/cssComponents.js'
import CreateGame from './CreateGame'
class Home extends React.Component{
    CreateGame = () => {
        alert('A new game will be created')
        //dispatch create game
    }
    Connect = () => {
        alert('Connect to a game')
        //dispatch connect game
    }
    render(){
      return(
        <View>
            <Filler />
            <ButtonContainer onPress = {() => this.props.navigation.navigate('CreateGame')}>
                <Label>CREATE A NEW GAME</Label>
            </ButtonContainer>
            <ButtonContainer onPress = {() => this.props.navigation.navigate('ConnectGame')}>
                <Label>CONNECT</Label>
            </ButtonContainer>
        </View>
      )
    }
  }

  export default Home;
