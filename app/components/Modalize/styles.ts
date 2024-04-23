import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  width: 100%;
  min-height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 4px;
`
export const Button = styled.TouchableOpacity`
  background-color: #e8833a;
  width: 95%;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

export const ButtonModal = styled(Button)`
  width: 100%;
  padding: 10px;

`

export const Title = styled.Text`
  text-align:center;
  font-size:16px;
  margin-top: 10px;
  color: #e8833a;
  font-weight: bold
`