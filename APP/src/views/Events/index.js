import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { RefreshControl } from "react-native";
import { Text } from "react-native";
import {
  Container,
  LoadingIcon,
  SecondaryHeader,
  SecondaryHeaderText,
  Search,
  SearchText,
  Scroll,
  RenderView,
  Control,
  ButtonControl,
  ButtonControlTxt,
} from "./styles";
import { AuthContext } from "../../context/auth";
import api from "../../config/api";

import MainHeader from "../../components/MainHeader";
import CardEvent from "../../components/CardEvent";
import { FlatList } from "react-native-gesture-handler";

export default function Events() {
  const { user, token } = useContext(AuthContext);
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [eventsTotal, setEventsTotal] = useState([]);
  const [events, setEvents] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    getEvents();
    getEventsTotal();
  }, [offset]);

  async function getEvents() {
    setLoading(true);
    await api
      .get(`/events/all/${user.id_people}/${offset < 0 ? 0 : offset}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((result) => {
        setEvents(result.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  async function getEventsTotal() {
    setLoading(true);
    await api
      .get(`/events/all/${user.id_people}/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((result) => {
        setEventsTotal(result.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const filteredData = eventsTotal
    ? eventsTotal.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : null;

  const handleViewMore = (props) => {
    navigation.navigate("Evento", {
      id: props.id,
      banner: props.banner,
      description: props.description,
      id_people: user.id_people,
      registered: props.registered,
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

  const renderItem = ({ item }) => (
    <CardEvent
      id={item.id}
      banner={item.banner}
      title={item.short_title}
      description={item.description}
      init_date={item.init_date}
      final_date={item.final_date}
      registered={item.registered}
      ViewMore={handleViewMore}
      Enrollment={handleEnrollment}
      EnrollmentCancel={handleEnrollmentCancel}
    />
  );

  return (
    <Container>
      <MainHeader />

      <Search>
        <SearchText
          placeholder="Pesquisar Evento..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <MaterialCommunityIcons name="magnify" color="#000" size={26} />
      </Search>

      <SecondaryHeader>
        <SecondaryHeaderText>Eventos Realizados</SecondaryHeaderText>
        <SecondaryHeaderText>Filtro</SecondaryHeaderText>
      </SecondaryHeader>

      <RenderView>
        {loading ? (
          <LoadingIcon size="large" color="#0B5916" />
        ) : events.length === 0 ? (
          <Text>Sem eventos</Text>
        ) : searchText ? (
          filteredData.length > 0 ? (
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>Nenhum evento encontrado</Text>
          )
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
            {events
              .slice(0)
              .reverse()
              .map((row, i) => (
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

      {!searchText && eventsTotal.length > 10 ? (
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
