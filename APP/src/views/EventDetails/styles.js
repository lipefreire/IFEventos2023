import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid #4a4a4a;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  background-color: green;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 10px;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

export const Body = styled.View`
  width: 100%;
  align-items: center;
`;
export const Scroller = styled.ScrollView`
  flex: 4;
  width: 100%;
  margin-bottom: 10px;
`;
export const BodyHeader = styled.View``;

export const BodyText = styled.Text`
  padding: 15px 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
`;
export const BodyTextDescription = styled.Text`
  padding: 10px 15px 15px 15px;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
`;
export const BodyButton = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 2px solid #4a4a4a;
`;

export const BodyButtonText = styled.Text``;
export const BodyEventHeld = styled.View`
  height: 50px;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #4a4a4a;
`;
export const BodyEventHeldText = styled.Text`
  color: #fff;
`;

export const BodyButtonEnrollment = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #0b5916;
`;
export const BodyButtonEnrollmentCancel = styled.TouchableOpacity`
  height: 50px;
  background-color: red;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const BodyButtonTextEnrollment = styled.Text`
  color: #fff;
`;
