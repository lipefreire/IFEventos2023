import styled from "styled-components/native";
import theme from "../../config/theme";

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  margin: 0px 0 10px 0;
  border: 1px solid #000;
  padding: 10px;
`;
export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 800;
  text-align: justify;
`;
export const HeaderSubText = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: #808080;
`;

export const Body = styled.ScrollView`
  flex: 4;
  margin: 15px;
`;

export const BodyTextAuthor = styled.Text`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 800;
  padding: 5px 0;
`;

export const BodyText = styled.Text`
  text-align: justify;
  font-size: 16px;
`;

export const BodyLocal = styled.View`
  background-color: #fff;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const BodyLocalTextTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const BodyLocalText = styled.Text`
  font-size: 14px;
  padding: 5px;
`;

export const ButtonEnrollment = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0;
`;

export const ButtonEnrollmentText = styled.Text`
  color: #fff;
`;

export const ButtonEnrollmentCancel = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.danger};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0;
`;

export const EventClosed = styled.View`
  width: 100%;
  height: 50px;
  background-color: #626262;
  border-radius: 10px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
`;

export const EventClosedText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
