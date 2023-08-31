import React, { useContext, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../config/theme";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Body,
  Header,
  HeaderBody,
  HeaderEdit,
  HeaderText,
  HeaderAboutText,
  ButtonModal,
  ButtonModalLogout,
  ButtonModalText,
  ConteinerModal,
  HeaderModal,
  HeaderModalTitle,
  HeaderModalTitleText,
  HeaderModalText,
  HeaderModalClosed,
  ModalBodyAboult,
  Image,
  ModalBodyAboultImage,
  ModalBodyText,
  ModalBodyAboultScroller,
  ModalBodyFunctionalities,
  ModalBodyFunctionalitiesTitle,
  ModalBodyFunctionalitiesList,
  ModalBodyFunctionalitiesText,
} from "./styles";

import MainHeader from "../../components/MainHeader";
import { AuthContext } from "../../context/auth";

import { Modal } from "react-native";

export default function User() {
  const { Logout, user } = useContext(AuthContext);
  const navigation = useNavigation();

  const [modalVisibleMeusDados, setModalVisibleMeusDados] = useState(false);
  const [modalVisibleAbout, setModalVisibleAbout] = useState(false);
  const [modalVisibleHelp, setModalVisibleHelp] = useState(false);

  const handleRegisteredEvents = () => {
    /*  navigation.navigate("Evento", {
      id: props.id,
      banner: props.banner,
      description: props.description,
      id_people: user.id_people,
      registered: props.registered,
      init_date: props.init_date,
    });
  }; */

    navigation.navigate("EventsRegistered");
  };

  return (
    <Container>
      <MainHeader />
      <Header>
        <HeaderBody>
          <HeaderText>
            Nome: <HeaderAboutText>{user.name}</HeaderAboutText>
          </HeaderText>
          <HeaderText>
            Email: <HeaderAboutText>{user.email}</HeaderAboutText>
          </HeaderText>
        </HeaderBody>

        <HeaderEdit onPress={() => setModalVisibleMeusDados(true)}>
          <MaterialCommunityIcons
            name="account-edit-outline"
            color="#fff"
            size={40}
          />
        </HeaderEdit>
      </Header>

      <Body>
        <ButtonModal onPress={() => handleRegisteredEvents()}>
          <MaterialCommunityIcons name="account-check" color="#fff" size={35} />
          <ButtonModalText>Eventos Inscritos</ButtonModalText>
        </ButtonModal>
        <ButtonModal onPress={() => setModalVisibleAbout(true)}>
          <MaterialCommunityIcons name="information" color="#fff" size={35} />
          <ButtonModalText>Sobre</ButtonModalText>
        </ButtonModal>
        <ButtonModal onPress={() => setModalVisibleHelp(true)}>
          <MaterialCommunityIcons name="lifebuoy" color="#fff" size={35} />
          <ButtonModalText>Ajuda</ButtonModalText>
        </ButtonModal>
        <ButtonModalLogout onPress={() => Logout()}>
          <MaterialCommunityIcons
            name="logout"
            color={theme.colors.danger}
            size={35}
          />
          <ButtonModalText style={{ color: theme.colors.danger }}>
            Sair
          </ButtonModalText>
        </ButtonModalLogout>
      </Body>

      <Modal
        visible={modalVisibleMeusDados}
        animationType="slide"
        onRequestClose={() => setModalVisibleMeusDados(false)}
      >
        <ConteinerModal>
          <HeaderModal>
            <HeaderModalTitle>
              <MaterialCommunityIcons
                name="account-edit"
                color={theme.colors.primary}
                size={35}
              />
              <HeaderModalTitleText>Editar meus dados</HeaderModalTitleText>
            </HeaderModalTitle>

            <HeaderModalClosed onPress={() => setModalVisibleMeusDados(false)}>
              <HeaderModalText>
                <MaterialCommunityIcons name="close" size={40} />
              </HeaderModalText>
            </HeaderModalClosed>
          </HeaderModal>
        </ConteinerModal>
      </Modal>

      <Modal
        visible={modalVisibleAbout}
        animationType="slide"
        onRequestClose={() => setModalVisibleMeusDados(false)}
      >
        <ConteinerModal>
          <HeaderModal>
            <HeaderModalTitle>
              <MaterialCommunityIcons
                name="information"
                color={theme.colors.primary}
                size={35}
              />
              <HeaderModalTitleText>Sobre o IFEventos</HeaderModalTitleText>
            </HeaderModalTitle>

            <HeaderModalClosed onPress={() => setModalVisibleAbout(false)}>
              <HeaderModalText>
                <MaterialCommunityIcons name="close" size={40} />
              </HeaderModalText>
            </HeaderModalClosed>
          </HeaderModal>

          <ModalBodyAboultScroller>
            <ModalBodyAboult>
              <ModalBodyAboultImage>
                <Image source={require("../../assets/ifeventos.png")} />
              </ModalBodyAboultImage>

              <ModalBodyText>
                IFeventos é um sistema web desenvolvido pela Fábrica de Software
                do no Instituto Federal de Ciências e Tecnologia do Sertão
                Pernambucano – Campus Petrolina (FSSPE) com apoio da Diretoria
                de Gestão de Tecnologia da Informação (DGTI) do IF Sertão - PE,
                e tem o intuito de gerenciar a realização de eventos e geração
                de certificados que acontecem no IF Sertão. O sistema
                proporciona inscrição on-line em eventos e nas atividades da
                programação que estão organizadas em formato de cronograma. A
                emissão de certificados para os eventos também é feita on-line,
                após lançamento de presenças e liberação pelo administrador do
                evento. Os certificados estarão disponíveis para o participante
                na sua conta, esses poderão ser autenticados por qualquer pessoa
                na página para autenticação de certificados presente no sistema.
              </ModalBodyText>

              <ModalBodyFunctionalities>
                <ModalBodyFunctionalitiesTitle>
                  Funcionalidades presente no IFeventos APP
                </ModalBodyFunctionalitiesTitle>

                <ModalBodyFunctionalitiesList>
                  <MaterialCommunityIcons name="check-bold" size={40} />
                  <ModalBodyFunctionalitiesText>
                    Inscrição on-line
                  </ModalBodyFunctionalitiesText>
                </ModalBodyFunctionalitiesList>

                <ModalBodyFunctionalitiesList>
                  <MaterialCommunityIcons name="check-bold" size={40} />
                  <ModalBodyFunctionalitiesText>
                    Registro de presença on-line
                  </ModalBodyFunctionalitiesText>
                </ModalBodyFunctionalitiesList>

                <ModalBodyFunctionalitiesList>
                  <MaterialCommunityIcons name="check-bold" size={40} />
                  <ModalBodyFunctionalitiesText>
                    Gerenciamento de atividades (Programação)
                  </ModalBodyFunctionalitiesText>
                </ModalBodyFunctionalitiesList>

                <ModalBodyFunctionalitiesList>
                  <MaterialCommunityIcons name="check-bold" size={40} />
                  <ModalBodyFunctionalitiesText>
                    Inscrição on-line
                  </ModalBodyFunctionalitiesText>
                </ModalBodyFunctionalitiesList>
              </ModalBodyFunctionalities>
            </ModalBodyAboult>
          </ModalBodyAboultScroller>
        </ConteinerModal>
      </Modal>

      <Modal
        visible={modalVisibleHelp}
        animationType="slide"
        onRequestClose={() => setModalVisibleHelp(false)}
      >
        <ConteinerModal>
          <HeaderModal>
            <HeaderModalTitle>
              <MaterialCommunityIcons
                name="lifebuoy"
                color={theme.colors.primary}
                size={35}
              />
              <HeaderModalTitleText>Ajuda</HeaderModalTitleText>
            </HeaderModalTitle>

            <HeaderModalClosed onPress={() => setModalVisibleHelp(false)}>
              <HeaderModalText>
                <MaterialCommunityIcons name="close" size={40} />
              </HeaderModalText>
            </HeaderModalClosed>
          </HeaderModal>
        </ConteinerModal>
      </Modal>
    </Container>
  );
}
