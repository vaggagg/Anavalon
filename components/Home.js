import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const Container=styled.TouchableOpacity`
  flex:1;
  padding:25px 0;
  justify-content:center;
  margin: 0 60px;
  background-color:#cab7ff;
  color: #fff;
  align-items:center;
  margin-bottom:5px;
  border-radius: 10px;
`
const Label = styled.Text`
    color: #fff;
    font-size: 13px;
`
const Filler = styled.View`
padding:20px;
`

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
            <Container onPress = {this.CreateGame}><Label>Create a new game!</Label></Container>
            <Container onPress = { this.Connect}><Label>Connect</Label></Container>
            <Filler />
        </View>
      )
    }
  }

  export default Home;
