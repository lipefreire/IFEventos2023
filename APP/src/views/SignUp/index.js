import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import theme from "../../config/theme";

import { Picker } from "@react-native-picker/picker";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Container,
  Header,
  Logo,
  Body,
  Inputs,
  InputArea,
  Input,
  PickerArea,
  PickerAreaHeader,
  PickerAreaBody,
  PickerText,
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
  const { SingUp } = useContext(AuthContext);
  const navigation = useNavigation();

  const [cpf, setCPF] = useState("");
  const [name, setName] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [deficiency, setDeficiency] = useState(null);
  const [selectedValueCampus, setSelectedValueCampus] = useState(1);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);

  const [selectedValueDeficiency, setSelectedValueDeficiency] = useState(null);
  const [selectedValueInstitution, setSelectedValueInstitution] =
    useState(true);

  const [emailValid, setEmailValid] = useState(true);

  const handleSignIn = () => {
    if (isValidEmail(email)) {
      setEmailValid(true);

      if (
        cpf == "" ||
        name == "" ||
        ocupation == "" ||
        email == "" ||
        selectedValueCampus == "" ||
        password == ""
      ) {
        alert("Preencha todos os campus!");
      } else {
        password == passwordConfirm
          ? SingUp(
              cpf,
              name,
              ocupation,
              email,
              institution,
              deficiency,
              selectedValueCampus,
              password
            )
          : Alert.alert("As senhas estão diferentes!");
      }
    } else {
      setEmailValid(false);
      alert("formato de email inválido!");
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

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
            <MaterialCommunityIcons
              name="badge-account-horizontal"
              color="#0b5916"
              size={26}
            />
            <Input
              placeholder="Digite seu CPF"
              placeholderTextColor="#0b5916"
              keyboardType="numeric"
              maxLength={11}
              minLength={11}
              value={cpf}
              onChangeText={(t) => setCPF(t)}
            />
          </InputArea>

          <InputArea>
            <MaterialCommunityIcons name="account" color="#0b5916" size={26} />
            <Input
              placeholder="Informe o seu nome"
              placeholderTextColor="#0b5916"
              keyboardType="default"
              value={name}
              onChangeText={(t) => setName(t)}
            />
          </InputArea>

          <InputArea>
            <MaterialCommunityIcons
              name="briefcase"
              color="#0b5916"
              size={26}
            />
            <Input
              placeholder="Informe sua Ocupação"
              placeholderTextColor="#0b5916"
              keyboardType="default"
              value={ocupation}
              onChangeText={(t) => setOcupation(t)}
            />
          </InputArea>

          {!emailValid ? (
            <TextCpfInfo>Digite um email válido!</TextCpfInfo>
          ) : null}

          <InputArea>
            <MaterialCommunityIcons name="email" color="#0b5916" size={26} />
            <Input
              placeholder="Informe seu email"
              placeholderTextColor={"#0b5916"}
              keyboardType="email-address"
              value={email}
              onChangeText={(t) => setEmail(t)}
            />
          </InputArea>

          <PickerAreaHeader>
            <PickerText>Você faz parte do IFSertãoPE ?</PickerText>
          </PickerAreaHeader>
          <InputArea>
            <PickerArea>
              <Picker
                selectedValue={selectedValueInstitution}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueInstitution(itemValue)
                }
              >
                <Picker.Item label="Não" value={null} />
                <Picker.Item label="Sim" value={true} />
              </Picker>
            </PickerArea>
          </InputArea>

          {!selectedValueInstitution ? (
            <InputArea>
              <MaterialCommunityIcons
                name="town-hall"
                color="#0b5916"
                size={26}
              />
              <Input
                placeholder="Qual instituição você pertence?"
                placeholderTextColor="#0b5916"
                keyboardType="default"
                value={institution}
                onChangeText={(t) => setInstitution(t)}
              />
            </InputArea>
          ) : null}
          <PickerAreaHeader>
            <PickerText>Possui alguma deficiência?</PickerText>
          </PickerAreaHeader>
          <InputArea>
            <PickerArea>
              <Picker
                selectedValue={selectedValueDeficiency}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueDeficiency(itemValue)
                }
              >
                <Picker.Item label="Não" value={null} />
                <Picker.Item label="Sim" value={true} />
              </Picker>
            </PickerArea>
          </InputArea>

          {selectedValueDeficiency ? (
            <InputArea>
              <MaterialCommunityIcons
                name="account"
                color="#0b5916"
                size={26}
              />
              <Input
                placeholder="Informe qual a sua deficiência"
                placeholderTextColor="#0b5916"
                keyboardType="default"
                value={deficiency}
                onChangeText={(t) => setDeficiency(t)}
              />
            </InputArea>
          ) : null}

          <PickerAreaHeader>
            <PickerText>Selecione o seu Campus:</PickerText>
          </PickerAreaHeader>
          <InputArea>
            <PickerArea>
              <Picker
                selectedValue={selectedValueCampus}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueCampus(itemValue)
                }
              >
                <Picker.Item label="Petrolina" value={1} />
                <Picker.Item label="Petrolina ZN" value={2} />
                <Picker.Item label="Floresta" value={3} />
                <Picker.Item label="Salgueiro" value={4} />
                <Picker.Item label="Ouricuri" value={5} />
                <Picker.Item label="Serra Talhada" value={6} />
                <Picker.Item label="Santa Maria da Boa Vista" value={7} />
                <Picker.Item
                  label="Centro de Referência de Afrânio"
                  value={8}
                />
                <Picker.Item
                  label="Centro de Referência de Petrolândia"
                  value={9}
                />
                <Picker.Item
                  label="Centro de Referência de Sertânia"
                  value={10}
                />
                <Picker.Item label="Reitoria" value={11} />
                <Picker.Item label="Outro" value={12} />
              </Picker>
            </PickerArea>
          </InputArea>

          <InputArea>
            <MaterialCommunityIcons name="lock" color="#0b5916" size={26} />
            <Input
              placeholder="Nova Senha"
              placeholderTextColor="#0b5916"
              value={password}
              secureTextEntry={passwordVisible ? false : true}
              onChangeText={(t) => setPassword(t)}
            />
            <Eye onPress={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? (
                <MaterialCommunityIcons
                  name="eye-off"
                  color="#0b5916"
                  size={22}
                />
              ) : (
                <MaterialCommunityIcons name="eye" color="#0b5916" size={22} />
              )}
            </Eye>
          </InputArea>

          <InputArea>
            <MaterialCommunityIcons name="lock" color="#0b5916" size={26} />
            <Input
              placeholder="Digite a Senha Novamente"
              placeholderTextColor="#0b5916"
              value={passwordConfirm}
              secureTextEntry={passwordVisibleConfirm ? false : true}
              onChangeText={(t) => setPasswordConfirm(t)}
            />
            <Eye
              onPress={() => setPasswordVisibleConfirm(!passwordVisibleConfirm)}
            >
              {passwordVisibleConfirm ? (
                <MaterialCommunityIcons
                  name="eye-off"
                  color="#0b5916"
                  size={22}
                />
              ) : (
                <MaterialCommunityIcons name="eye" color="#0b5916" size={22} />
              )}
            </Eye>
          </InputArea>
        </Inputs>
        <ButtonArea>
          <Button onPress={() => handleSignIn()}>
            <ButtonTxt>CRIAR CONTA</ButtonTxt>
          </Button>
        </ButtonArea>
        <ButtonAreaCreate>
          <Button onPress={() => navigation.navigate("Login")}>
            <ButtonTxtCreate>Já Possui conta? Faça o Login</ButtonTxtCreate>
          </Button>
        </ButtonAreaCreate>

        <Footer>
          <LogoFooter source={require("../../assets/Marca_IF.png")} />
        </Footer>
      </Body>
    </Container>
  );
};
