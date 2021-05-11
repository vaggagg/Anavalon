import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native'
import { ButtonContainer, Filler, Label, BlackLabel,Input } from '../helpers/cssComponents.js'
class ConnectGame extends React.Component{
    state = {
        id:'',
        displayButton: false
    }
    handleChange = async (event) => {
       await this.setState({
            id:  event.target.value
        })
        if(this.state.id!=='')
            this.setState({
                displayButton: true
            })
            else
            this.setState({
                displayButton: false
            })
    }
    render(){
        const { displayButton, id } = this.state
      return(
        <View>
            <Filler />
            <View>
            <BlackLabel>Insert Game ID</BlackLabel>
            <Input
                onChange={this.handleChange}
                value={id}
            />
            { displayButton &&
            <ButtonContainer onPress = { this.Connect}><Label>Submit</Label></ButtonContainer>
            }
            </View>
        </View>
      )
    }
  }
//CONNECT TO REDUX STORE PLEASE
  export default ConnectGame;
