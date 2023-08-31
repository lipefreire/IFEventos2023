import React from "react";
import styled from "styled-components/native";

export default function mainHeader() {
  return (
    <Container>
      <Header>
        <Image source={require("../assets/ifheader.png")} />
        <Image source={require("../assets/Marca_IF.png")} />
      </Header>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex-direction: column;
  width: 100%;
  height: 15%;
`;
const Header = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 2%;
`;

const Image = styled.Image``;
