import React, { useState, useEffect, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  LoadingIcon,
  Image,
  Header,
  HeaderText,
  HeaderButton,
  Body,
  Scroller,
  BodyHeader,
  BodyText,
  BodyTextDescription,
  BodyEventHeld,
  BodyEventHeldText,
  BodyButtonEnrollment,
  BodyButtonEnrollmentCancel,
  BodyButton,
  BodyButtonText,
  BodyButtonTextEnrollment,
} from "./styles";

import { AuthContext } from "../../context/auth";

import api from "../../config/api";
import { Alert, RefreshControl } from "react-native";

import { formatedDate, formatedHour } from "../../utilities/usefulFunctions";

export default function EventDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { user, token } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [EventInfo, setEventInfo] = useState({
    id: route.params.id,
    registered: route.params.registered,
    id_people: user.id_people,
    banner: route.params.banner,
    description: route.params.description,
  });

  const [subevent, setSubevent] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (EventInfo.id_people === "undefinid") {
      navigation.navigate("Home");
    } else {
      getSubevents();
      setLoading(false);
    }
  }, [EventInfo]);

  async function getSubevents() {
    setLoading(true);
    await api
      .get(`/events/${EventInfo.id}/${EventInfo.id_people}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((result) => {
        setSubevent(result.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleViewMore = () => {
    navigation.navigate("Programação", {
      id: EventInfo.id,
      id_people: EventInfo.id_people,
      registered: EventInfo.registered,
      init_date: subevent.init_date,
      final_date: subevent.final_date,
      title: subevent.title,
      address_local: subevent.address_local,
      accomplished:
        subevent.status_event === 1 ||
        new Date(subevent.final_date) < new Date(),
    });
  };

  const handleViewAddress = () => {
    Alert.alert(
      subevent.address_local,
      `\nCampus: ${subevent.campus}\n\n${subevent.address_street}\n\nBairro: ${subevent.address_district}\n\nCep: ${subevent.cep}\n\nCidade: ${subevent.city}`
    );
  };

  const handleEnrollment = async () => {
    const postData = {
      presence: 0,
      id_person: EventInfo.id_people,
      id_event: EventInfo.id,
      id_type_participation_event: 1,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    await api
      .post("/events/enrollment_event", postData, { headers })
      .then((res) => {
        alert("Inscrição Realizada!");
        const updatedInfo = { ...EventInfo };

        updatedInfo.registered = 1;
        setEventInfo(updatedInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEnrollmentCancel = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    await api
      .post(
        "/events/enrollment_event_delete",
        {
          id_event: EventInfo.id,
          id_person: EventInfo.id_people,
        },
        { headers }
      )
      .then((res) => {
        alert("Inscrição Cancelada!");
        const updatedInfo = { ...EventInfo };

        updatedInfo.registered = 0;
        setEventInfo(updatedInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Image source={{ uri: `${EventInfo.banner}` }} />

      {loading ? (
        <LoadingIcon size="large" color="#0B5916" />
      ) : (
        <Scroller>
          <Header>
            <HeaderText>Local: {subevent.address_local} </HeaderText>
            <HeaderButton
              onPress={() => {
                handleViewAddress();
              }}
            >
              <MaterialCommunityIcons
                name="map-marker"
                color="#fff"
                size={26}
              />
            </HeaderButton>
          </Header>

          <HeaderText>
            {formatedDate(subevent.init_date)} às{" "}
            {formatedHour(subevent.init_time)}h até{" "}
            {formatedDate(subevent.final_date)} às{" "}
            {formatedHour(subevent.final_time)}h
          </HeaderText>

          <Body>
            <BodyHeader>
              <BodyText>{subevent.title}</BodyText>
            </BodyHeader>
            <BodyHeader>
              <BodyTextDescription>{subevent.description}</BodyTextDescription>
            </BodyHeader>

            {subevent.status_event === 1 ||
            new Date(subevent.final_date) < new Date() ? (
              <BodyEventHeld>
                <BodyEventHeldText>Evento Realizado</BodyEventHeldText>
              </BodyEventHeld>
            ) : EventInfo.registered === 0 ? (
              <BodyButtonEnrollment onPress={() => handleEnrollment()}>
                <BodyButtonTextEnrollment>Inscreva-se</BodyButtonTextEnrollment>
              </BodyButtonEnrollment>
            ) : (
              <BodyButtonEnrollmentCancel
                onPress={() => handleEnrollmentCancel()}
              >
                <BodyButtonTextEnrollment>
                  Cancelar Inscrição
                </BodyButtonTextEnrollment>
              </BodyButtonEnrollmentCancel>
            )}
            <BodyButton onPress={() => handleViewMore()}>
              <BodyButtonText>Ver Programação</BodyButtonText>
            </BodyButton>
          </Body>
        </Scroller>
      )}
    </Container>
  );
}
