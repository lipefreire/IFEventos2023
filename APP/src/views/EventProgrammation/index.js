import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/auth";
import api from "../../config/api";

import theme from "../../config/theme";

import { bubbleSort } from "../../utilities/usefulFunctions";

import {
  Container,
  LoadingIcon,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  Body,
  Scroll,
} from "./styles";

import CardSubevents from "../../components/CardSubevents";

export default function EventProgrammation() {
  const { user, token } = useContext(AuthContext);
  const navigation = useNavigation();
  const route = useRoute();

  const event = {
    id: route.params.id,
    title: route.params.title,
    address_local: route.params.address_local,
    registered: route.params.registered,
    id_people: user.id_people,
    init_date: route.params.init_date,
    final_date: route.params.final_date,
    accomplished: route.params.accomplished,
  };

  const [subevents, setSubevents] = useState([]);
  let eventDays = [];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (event.id_people === "undefinid") {
      navigation.navigate("Home");
    } else {
      getSubevents();
      setLoading(false);
    }
  }, []);

  async function getSubevents() {
    setLoading(true);
    await api
      .get(`/events/subevent/${event.id}/${event.id_people}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((result) => {
        setSubevents(result.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  subevents.forEach((element) => {
    if (!eventDays.includes(element.date)) {
      eventDays.push(element.date);
    }
  });

  bubbleSort(subevents);

  const handleEnrollment = () => {
    console.log("Inscreva-se no subevento");
  };
  const handleEnrollmentCancel = () => {
    console.log("Cancelar Inscrição no subevento");
  };
  const handleViewMore = (props) => {
    navigation.navigate("Detalhes", {
      id: props.data.id,
      registered: props.data.registered,
      title: props.data.title,
      description: props.data.description,
      local: props.data.local,
      date: props.data.date,
      init_time: props.data.init_time,
      final_time: props.data.final_time,
      requires_enrollment: props.data.requires_enrollment,
      vacancies: props.data.vacancies,
      total_vacancies: props.data.total_vacancies,
      authors: props.data.authors,
      id_event: props.data.id_event,
      type: props.data.type,
      id_parent: props.data.id_parent,
      accomplished: event.accomplished
    });
  };

  return (
    <Container>
      {loading ? (
        <LoadingIcon size="large" color={theme.colors.primary} />
      ) : (
        <>
          <Header>
            <HeaderTitle>
              {event.title}{" "}
              <HeaderSubtitle>{event.address_local}</HeaderSubtitle>
            </HeaderTitle>
          </Header>
          <Body>
            <Scroll>
              {subevents.map((item, index) => (
                <CardSubevents
                  key={index}
                  days={eventDays}
                  data={item}
                  accomplished={event.accomplished}
                  handleEnrollment={handleEnrollment}
                  handleEnrollmentCancel={handleEnrollmentCancel}
                  handleViewMore={handleViewMore}
                />
              ))}
            </Scroll>
          </Body>
        </>
      )}
    </Container>
  );
}
