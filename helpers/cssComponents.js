import styled from 'styled-components/native'
export const ButtonContainer=styled.TouchableOpacity`
  margin: 20px 0;
  background-color:#871b12;
  border-radius: 10px;
  align-self: center;
  align-items: center;
  min-width: 200px;
  border: 2px solid black;
`
export const Label = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 700px;
    padding: 20px; 
    justify-self: center;
`

export const BlackLabel = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding: 20px; 
    align-self: center;
`
export const Filler = styled.View`
padding:20px;
`
export const Input = styled.TextInput`
height: 50px; 
font-size: 20px; 
width:400px;
background-color: #fff;
align-self: center; 
`