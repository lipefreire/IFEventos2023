import styled from "styled-components/native";
import theme from '../../config/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const SecondaryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20%;
  width: 100%;
  height: 5%;
  margin-top: 10px;
`;

export const SecondaryHeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Search = styled.View`
background-color: #fff;
width: 80%;
height: 50px;
border-radius: 15px;
border: 2px solid ${theme.colors.primary};
margin-top: 10px;
padding-left: 15px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`;

export const SearchText = styled.TextInput`
flex: 1;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  margin-top: 2%;
`;
export const RenderView = styled.View`
  flex: 1;
  margin-top: 2%;
`;

export const Control = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
`;

export const ButtonControl = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  color: #f5f5f5;
  padding: 5px 30px;
  border-radius: 10px;
`;
export const ButtonControlTxt = styled.Text`
  color: #f5f5f5;
`;
