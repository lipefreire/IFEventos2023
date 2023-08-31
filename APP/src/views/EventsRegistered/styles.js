import styled from "styled-components/native";
import theme from "../../config/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const HeaderControl = styled.View`
  flex-direction: row;
  margin: 10px;
  
`;

export const HeaderControlButton = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  width: 40%;
  
`;

export const HeaderControlText = styled.Text`
  font-size: 18px;
  color: #fff;
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
