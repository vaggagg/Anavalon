import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import CreateGame from './components/CreateGame'
import ConnectGame from './components/ConnectGame'

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
const Filler = styled.View`
padding:20px;
`

// Config for StackNav
const StackNavigatorConfig = {
  headerMode: "screen"
}

const StackConfig = {
  Home:{
    name: "Home",
    component: Home,
    options: {headerShown: false}
  },
  CreateGame:{
    name: "CreateGame",
    component: CreateGame,
    options: {headerShown: true}
  },
  ConnectGame:{
    name: "ConnectGame",
    component: ConnectGame,
    options: {headerShown: true}
  },
}

const Stack = createStackNavigator();
const MainNav = () =>(
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['Home']} />
      <Stack.Screen {...StackConfig['CreateGame']} />
      <Stack.Screen {...StackConfig['ConnectGame']} />
    </Stack.Navigator>
)

export default function App() {
  /* render(){
    const store = createStore(reducer,middleware)
    return(
      <Provider store={store}>
        <NavigationContainer>
         <MainNav />
        </NavigationContainer>
      </Provider>    
    )*/
  return (
        <NavigationContainer>
         <MainNav />
        </NavigationContainer>
  );
}
