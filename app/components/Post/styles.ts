import { styled } from "styled-components/native";

export const Container = styled.Pressable`
  width:  95%;
  background-color: #fff;
  padding: 10px;
  min-height: 50px;
  border-radius: 4px;
  margin-bottom: 10px;
  display:flex;
  align-self: center;
  justify-content: center;
  elevation: 5;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
`

export const Body = styled.View`
`

export const BasicText = styled.Text<{color: string}>`
  font-size: 14px;
  color: ${props => props.color};
  padding: 8px 0px 8px 0px;
  text-align: justify;
`

export const Button = styled.TouchableOpacity`
  width: 45%;
  background-color: #e8833a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SeconddaryButton = styled(Button)`
  background-color: #fae6d8;
  border: 1px solid #e8833a;
`


export const GroupButton = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px
`