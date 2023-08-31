import styled from "styled-components/native";
import theme from "../../config/theme";

export const Container = styled.View`
  background-color: ${theme.colors.primary};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const Logo = styled.Image`
  margin: 15px;
  width: 150px;
  height: 150px;
`;

export const Body = styled.ScrollView`
  flex: 2;
  width: 100%;
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
  border: 4px solid ${theme.colors.primary};
  background-color: #fff;
  flex-direction: row;
  border-radius: 15px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;



export const PickerArea = styled.View`
flex: 1;

`;

export const PickerAreaHeader = styled.View`
  flex: 1;
 flex-direction: row;
 align-items: center;
 padding-bottom: 5px;
 padding-left: 10px;
 
`;
export const PickerAreaBody = styled.View`
flex: 1;
`;
export const PickerText = styled.Text`
 
`;


export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.primary};
  margin-left: 10px;
`;

export const TextCpfInfo = styled.Text`
  padding: 5px;
  color: red;
`;

export const Eye = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const ButtonArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.primary};
  flex-direction: row;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonAreaCreate = styled.View`
  width: 100%;
  height: 60px;
  border: 2px solid ${theme.colors.primary};
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
  color: ${theme.colors.primary};
`;
export const Footer = styled.View`
flex: 1
justify-content: center;

  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
export const LogoFooter = styled.Image``;
