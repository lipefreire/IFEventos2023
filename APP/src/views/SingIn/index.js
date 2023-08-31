import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import theme from "../../config/theme";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Container,
  Header,
  Logo,
  Body,
  Inputs,
  InputArea,
  Input,
  TextCpfInfo,
  Eye,
  ButtonArea,
  ButtonAreaCreate,
  Button,
  ButtonTxt,
  ButtonTxtCreate,
  Footer,
  LogoFooter,
} from "./styles";

import { AuthContext } from "../../context/auth";

export default () => {
  const { SingIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    SingIn(cpf, password)
  };

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/ifeventos.png")} />
      </Header>

      <Body>
        <Inputs>
          {cpf.length < 11 && cpf.length > 0 ? (
            <TextCpfInfo>Digite os 11 digitos do CPF!</TextCpfInfo>
          ) : null}

          <InputArea>
            <MaterialCommunityIcons name="account" color={theme.colors.primary} size={26} />
            <Input
              placeholder="Digite seu CPF"
              placeholderTextColor={theme.colors.primary}
              keyboardType="numeric"
              maxLength={11}
              minLength={11}
              value={cpf}
              onChangeText={(t) => setCPF(t)}
            />
          </InputArea>

          <InputArea>
            <MaterialCommunityIcons name="lock" color={theme.colors.primary} size={26} />
            <Input
              placeholder="Digite sua Senha"
              placeholderTextColor={theme.colors.primary}
              value={password}
              secureTextEntry={passwordVisible ? false : true}
              onChangeText={(t) => setPassword(t)}
            />
            <Eye onPress={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? (
                <MaterialCommunityIcons
                  name="eye-off"
                  color={theme.colors.primary}
                  size={22}
                />
              ) : (
                <MaterialCommunityIcons name="eye" color={theme.colors.primary} size={22} />
              )}
            </Eye>
          </InputArea>
        </Inputs>
        <ButtonArea>
          <Button onPress={() => handleSignIn()}>
            <ButtonTxt>LOGIN</ButtonTxt>
          </Button>
        </ButtonArea>
        <ButtonAreaCreate>
          <Button onPress={() => navigation.navigate("Register")}>
            <ButtonTxtCreate>CRIAR CONTA</ButtonTxtCreate>
          </Button>
        </ButtonAreaCreate>

        <Footer>
          <LogoFooter source={require("../../assets/Marca_IF.png")} />
        </Footer>
      </Body>
    </Container>
  );
};
