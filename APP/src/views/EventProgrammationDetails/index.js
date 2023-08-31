import React, { useState, useEffect, useContext } from "react";

import { Text } from "react-native";
import {
  Container,
  Header,
  HeaderText,
  HeaderSubText,
  Body,
  BodyTextAuthor,
  BodyText,
  BodyLocal,
  BodyLocalTextTitle,
  BodyLocalText,
  ButtonEnrollment,
  ButtonEnrollmentCancel,
  ButtonEnrollmentText,
  EventClosed,
  EventClosedText,
} from "./styles";

import { AuthContext } from "../../context/auth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { formatedDate, formatedHour } from "../../utilities/usefulFunctions";

export default () => {
  const { user, token } = useContext(AuthContext);
  const navigation = useNavigation();
  const route = useRoute();

  const subevent = {
    id: route.params.id,
    registered: route.params.registered,
    title: route.params.title,
    description: route.params.description,
    local: route.params.local,
    date: route.params.date,
    init_time: route.params.init_time,
    final_time: route.params.final_time,
    requires_enrollment: route.params.requires_enrollment,
    vacancies: route.params.vacancies,
    total_vacancies: route.params.total_vacancies,
    authors: route.params.authors,
    id_event: route.params.id_event,
    type: route.params.type,
    id_parent: route.params.id_parent,
    accomplished: route.params.accomplished,
  };
  return (
    <Container>
      <Header>
        <HeaderText>
          {subevent.title}. <HeaderSubText>{subevent.type}</HeaderSubText>{" "}
        </HeaderText>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <BodyTextAuthor>
          {subevent.authors ? subevent.authors : "Detalhes"}
        </BodyTextAuthor>
        <BodyText>{subevent.description}</BodyText>
        <BodyLocal>
          <BodyLocalTextTitle>Dia e horário</BodyLocalTextTitle>
          <BodyLocalText>
            {formatedDate(subevent.date)}, {formatedHour(subevent.init_time)} -{" "}
            {formatedHour(subevent.final_time)}
          </BodyLocalText>

          <BodyLocalTextTitle>Local</BodyLocalTextTitle>
          <BodyLocalText>{subevent.local}</BodyLocalText>
        </BodyLocal>

        {subevent.accomplished ? (
          <EventClosed>
            <EventClosedText>Atividade realizada</EventClosedText>
          </EventClosed>
        ) : subevent.registered == 0 ? (
          <ButtonEnrollment>
            <ButtonEnrollmentText>Inscreva-se</ButtonEnrollmentText>
          </ButtonEnrollment>
        ) : (
          <ButtonEnrollmentCancel>
            <ButtonEnrollmentText>Cancelar Inscrição</ButtonEnrollmentText>
          </ButtonEnrollmentCancel>
        )}
      </Body>
    </Container>
  );
};
