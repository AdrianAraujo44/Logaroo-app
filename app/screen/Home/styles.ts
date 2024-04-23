import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background-color: #fae6d8;
  width: 100%;
  height: 80px;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`

export const TitleText = styled.Text`
  font-size: 22px;
  color: #e8833a;
  font-weight: bold;
  display: flex;
`

export const SubText = styled.Text`
  font-size: 14px;
  color: #e8833a;
  font-weight: bold;
  display: flex;
`
export const BasicText = styled.Text<{$color: string}>`
  font-size: 14px;
  color: ${props => props.$color}
`

export const AddButton = styled.Pressable`
  width: 100px;
  border-radius: 4px;
  background-color:  #e8833a;
  padding: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Body = styled.FlatList`
  padding: 5px 0px;
  width: 100%;
  flex: 1;
  display:flex;
`

export const Footer = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
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