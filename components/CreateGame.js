import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native'
import { ButtonContainer, Filler, Label, BlackLabel,Input } from '../helpers/cssComponents.js'
class CreateGame extends React.Component{
    state = {
        name:'',
        displayButton: false
    }
    handleChange = async (event) => {
       await this.setState({
            name:  event.target.value
        })
        if(this.state.name!=='')
            this.setState({
                displayButton: true
            })
            else
            this.setState({
                displayButton: false
            })
    }
    render(){
        const { displayButton, name } = this.state
      return(
        <View>
            <Filler />
            <View>
            <BlackLabel>Enter your name</BlackLabel>
            <Input
                onChange={this.handleChange}
                value={name}
            />
            { displayButton &&
            <ButtonContainer onPress = { this.Connect}><Label>Submit your name</Label></ButtonContainer>
            }
            </View>
        </View>
      )
    }
  }
//CONNECT TO REDUX STORE PLEASE
  export default CreateGame;
