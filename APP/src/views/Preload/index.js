import React from "react";
import { Container, LoadingIcon, Logo } from "./styles";

export default function Preload (){
  return (
    <Container>
      <Logo source={require("../../assets/ifeventos.png")} />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
}
