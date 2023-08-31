import styled from "styled-components/native";
import theme from "../../config/theme";

export const Container = styled.View`
  flex: 1;
`;
export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

/* Header */
export const Header = styled.View`
  flex: 0.5;
  justify-content: center;
  background-color: #fff;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderBody = styled.View``;
export const HeaderEdit = styled.TouchableOpacity`
  background-color: #d2d2d2;
  border-radius: 10px;
  padding: 3px;
`;
export const HeaderText = styled.Text`
  font-weight: 800;
  font-size: 18px;
`;
export const HeaderAboutText = styled.Text`
  font-weight: 400;
  font-size: 18px;
`;

/* Body Menu */
export const Body = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const ButtonModal = styled.TouchableOpacity`
  width: 80%;
  height: 80px;
  background-color: ${theme.colors.primary};
  padding: 0 15px;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
  flex-direction: row;
`;

export const ButtonModalLogout = styled.TouchableOpacity`
  width: 80%;
  height: 80px;
  background-color: #fff;
  padding: 0 15px;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
  flex-direction: row;
  border: 1px solid ${theme.colors.danger};
`;

export const ButtonModalText = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
  font-weight: 800;
`;

/* Modal */
export const ConteinerModal = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  background-color: #fff;
  padding: 10px 20px;
`;

export const HeaderModalTitle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderModalTitleText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin-left: 5px;
`;
export const HeaderModalText = styled.Text`
  margin-left: 5px;
`;

export const HeaderModalClosed = styled.TouchableOpacity``;

export const ModalBodyAboultScroller = styled.ScrollView``;
export const ModalBodyAboult = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ModalBodyAboultImage = styled.View`
  background-color: ${theme.colors.primary};
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
`;

export const ModalBodyText = styled.Text`
  text-align: justify;
  background-color: #fff;
  font-size: 18px;
  padding: 10px 20px;
`;

export const ModalBodyFunctionalities = styled.View`
  margin: 20px;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  justify-content: center;
`;
export const ModalBodyFunctionalitiesTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
`;
export const ModalBodyFunctionalitiesList = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ModalBodyFunctionalitiesText = styled.Text`
  font-size: 16px;
  padding-left: 5px;
  font-weight: 600;
`;
