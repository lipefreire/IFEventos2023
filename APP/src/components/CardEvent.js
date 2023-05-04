import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";

const cardEvent = (props) => {
  function dayFormatted() {
    let day = new Date(props.init_date).getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return day;
  }

  function monthFormatted() {
    const months = [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ];
    const month = new Date(props.init_date).getMonth();

    return months[month];
  }

  function Formatted() {
    let descriptionFormatted = "";
    if (props.description.length > 190) {
      for (let i = 0; i < 190; i++) {
        descriptionFormatted += props.description[i];
      }
    } else {
      descriptionFormatted = props.description;
    }

    return descriptionFormatted;
  } 

  return (
    <Container>
      <Timeline>
        <Line />
        <Day> {dayFormatted()} </Day>
        <Month> {monthFormatted()} </Month>
        <Year>{new Date(props.init_date).getFullYear()}</Year>
        <Line />
      </Timeline>

      <Card>
        <Image
          source={{
            uri: `${props.banner}`,
          }}
        />

        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription> {Formatted() + "..."} </CardDescription>
        </CardBody>

        <Buttons>
          {new Date(props.final_date) < new Date() ? (
            <Button style={{ backgroundColor: "#808080" }} onPress={() => {}}>
              <TextBnt>Evento Encerrado</TextBnt>
            </Button>
          ) : props.registered === 1 ? (
            <Button
              style={{ backgroundColor: "red" }}
              onPress={() => {
                props.EnrollmentCancel(props.id);
              }}
            >
              <TextBnt>Cancelar Inscrição</TextBnt>
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "green" }}
              onPress={() => {
                props.Enrollment(props.id);
              }}
            >
              <TextBnt>Inscreva - se</TextBnt>
            </Button>
          )}
          <ButtonPlus
            onPress={() => {
              props.ViewMore(props);
            }}
          >
            <TextBntPlus>Ver Mais</TextBntPlus>
          </ButtonPlus>
        </Buttons>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`;

const Timeline = styled.View`
  width: 20%;
  height: 30%;
  align-items: center;
  justify-content: center;
`;

const Line = styled.View`
  background-color: #000;
  width: 2px;
  height: 150px;
`;

const Day = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: red;
`;

const Month = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;
const Year = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Card = styled.View`
  display: flex;
  background-color: #f8f8f8;
  width: 70%;
  height: 320px;
  justify-content: space-between;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-width: 1px;
  border-color: #bdbdbd;
`;

const Image = styled.Image`
  width: 100%;
  height: 90px;
  object-fit: cover;
`;

const CardBody = styled.View`
  flex: 1;
`;
const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 3%;
`;

const CardDescription = styled.Text`
  text-align: justify;
  font-size: 15px;
  padding-left: 3%;
  padding-right: 3%;
`;

const Buttons = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  width: 90%;
  height: 28%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  margin-top: -50px;
`;

const ButtonPlus = styled.TouchableOpacity`
  width: 90%;
  height: 28%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: #bdbdbd;
`;

const TextBnt = styled.Text`
  color: #fff;
`;

const TextBntPlus = styled.Text``;

export default cardEvent;
