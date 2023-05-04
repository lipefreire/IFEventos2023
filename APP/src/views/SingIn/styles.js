import styled from "styled-components/native";
import theme from "../../config/theme";

export const Container = styled.View`
  background-color: #0b5916;
  padding-top: 20px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Logo = styled.Image``;

export const Body = styled.View`
  flex: 2;
  padding: 10px 20px;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Inputs = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  border: 4px solid #0b5916;
  background-color: #fff;
  flex-direction: row;
  border-radius: 15px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #0b5916;
  margin-left: 10px;
`;

export const TextCpfInfo = styled.Text`
padding: 5px;
color: red
`;

export const Eye = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const ButtonArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #0b5916;
  flex-direction: row;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonAreaCreate = styled.View`
  width: 100%;
  height: 60px;
  border: 2px solid #0b5916;
  background-color: #fff;
  flex-direction: row;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  padding-left: 0;
`;

export const ButtonTxt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const ButtonTxtCreate = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #0b5916;
`;
export const Footer = styled.View`
flex: 1;
justify-content: center;

  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const LogoFooter = styled.Image``;
