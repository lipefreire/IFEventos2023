import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { RefreshControl } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Container,
  LoadingIcon,
  RenderView,
  HeaderControl,
  HeaderControlButton,
  HeaderControlText,
  Scroll,
  Control,
  ButtonControl,
  ButtonControlTxt,
} from "./styles";
import { AuthContext } from "../../context/auth";
import api from "../../config/api";

import { bubbleSortInitDate } from "../../utilities/usefulFunctions";

import CardEvent from "../../components/CardEvent";

export default function Home() {
  const { user, token } = useContext(AuthContext);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const [loading, setLoading] = useState(false);

  const [eventsNext, setEventsNext] = useState([]);
  const [eventsPast, setEventsPast] = useState([]);

  const [eventsControlNext, setEventsControlNext] = useState(true);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    getEvents();
  }, [offset]);

  async function getEvents() {
    setLoading(true);
    await api
      .get(`/events/registered/${user.id_people}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((result) => {
        setEventsPast(result.data.response);
        setEventsNext(result.data.responseNext);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const handleViewMore = (props) => {
    navigation.navigate("Evento", {
      id: props.id,
      banner: props.banner,
      description: props.description,
      id_people: user.id_people,
      registered: props.registered,
      init_date: props.init_date,
    });
  };

  const handleEnrollment = async (id_event) => {
    const postData = {
      presence: 0,
      id_person: user.id_people,
      id_event: id_event,
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
        getEvents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEnrollmentCancel = async (id_event) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    await api
      .post(
        "/events/enrollment_event_delete",
        {
          id_event: id_event,
          id_person: user.id_people,
        },
        { headers }
      )
      .then((res) => {
        alert("Inscrição Cancelada!");
        getEvents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  bubbleSortInitDate(eventsNext);

  return (
    <Container>
      <HeaderControl>
        <HeaderControlButton
          style={eventsControlNext ? { opacity: 0.7 } : { opacity: 1 }}
          onPress={() => setEventsControlNext(true)}
        >
          <HeaderControlText>Próximos</HeaderControlText>
        </HeaderControlButton>

        <HeaderControlButton
          style={!eventsControlNext ? { opacity: 0.7 } : { opacity: 1 }}
          onPress={() => setEventsControlNext(false)}
        >
          <HeaderControlText>Encerrados</HeaderControlText>
        </HeaderControlButton>
      </HeaderControl>

      <RenderView>
        {loading ? (
          <LoadingIcon size="large" color="#0B5916" />
        ) : eventsNext.length === 0 ? (
          <Text>Sem eventos</Text>
        ) : (
          <Scroll
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => getEvents()}
              />
            }
          >
            {eventsControlNext
              ? eventsNext.map((row, i) => (
                  <CardEvent
                    key={row.id}
                    id={row.id}
                    banner={row.banner}
                    title={row.short_title}
                    description={row.description}
                    init_date={row.init_date}
                    final_date={row.final_date}
                    registered={row.registered}
                    ViewMore={handleViewMore}
                    Enrollment={handleEnrollment}
                    EnrollmentCancel={handleEnrollmentCancel}
                  />
                ))
              : eventsPast.map((row, i) => (
                  <CardEvent
                    key={row.id}
                    id={row.id}
                    banner={row.banner}
                    title={row.short_title}
                    description={row.description}
                    init_date={row.init_date}
                    final_date={row.final_date}
                    registered={row.registered}
                    ViewMore={handleViewMore}
                    Enrollment={handleEnrollment}
                    EnrollmentCancel={handleEnrollmentCancel}
                  />
                ))}
          </Scroll>
        )}
      </RenderView>

      {eventsControlNext && eventsNext > 10 ? (
        <Control>
          <ButtonControl
            onPress={() => {
              setOffset(offset - 10);
            }}
          >
            <ButtonControlTxt>Anterior</ButtonControlTxt>
          </ButtonControl>

          <ButtonControl
            onPress={() => {
              setOffset(offset + 10);
            }}
          >
            <ButtonControlTxt>Próximo</ButtonControlTxt>
          </ButtonControl>
        </Control>
      ) : !eventsControlNext && eventsPast > 10 ? (
        <Control>
          <ButtonControl
            onPress={() => {
              setOffset(offset - 10);
            }}
          >
            <ButtonControlTxt>Anterior</ButtonControlTxt>
          </ButtonControl>

          <ButtonControl
            onPress={() => {
              setOffset(offset + 10);
            }}
          >
            <ButtonControlTxt>Próximo</ButtonControlTxt>
          </ButtonControl>
        </Control>
      ) : null}
    </Container>
  );
}
