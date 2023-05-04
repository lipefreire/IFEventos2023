import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const Header = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #626262;
  margin-bottom: 10px;
`;
export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  text-align: justify;
`;

export const HeaderSubtitle = styled.Text`
  font-size: 13px;
  color: #626262;
`;

export const Body = styled.View`
  flex: 6;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
`;
export const Scroll = styled.ScrollView`

`;
