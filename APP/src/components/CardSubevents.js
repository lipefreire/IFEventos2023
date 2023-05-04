import React from "react";
import styled from "styled-components/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CardSubevents(props) {
  const formatedDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    let dateFormated = `${day < 10 ? `0${day}` : day}/${
      month < 10 ? `0${month}` : month
    }/${year}`;
    return dateFormated;
  };

  function FormattedTitle(local) {
    let descriptionFormatted = "";
    if (local.length > 50) {
      for (let i = 0; i < 50; i++) {
        descriptionFormatted += local[i];
      }
    } else {
      descriptionFormatted = local;
    }

    return descriptionFormatted;
  }

  function Formatted(local) {
    let descriptionFormatted = "";
    if (local.length > 50) {
      for (let i = 0; i < 50; i++) {
        descriptionFormatted += local[i];
      }
    } else {
      descriptionFormatted = local;
    }

    return descriptionFormatted;
  }

  const formatedHour = (hour) => {
    hour = String(hour);
    return hour.substring(0, 5);
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>
            {FormattedTitle(props.data.title)}...{" "}
            <CardSubtitle> | {props.data.type}</CardSubtitle>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardVacancias>
            <CardVacanciasText>
              Vagas:{" "}
              {props.data.vacancias ? props.data.vacancias : "Ilimitadas"}{" "}
            </CardVacanciasText>
          </CardVacancias>
          <CardBodyTextAuthor>
            {props.data.author ? props.data.author : "Autor não informado"}
          </CardBodyTextAuthor>
          <CardBodyDate>
            <MaterialCommunityIcons name="calendar" color="#ccc" size={26} />
            <CardBodyText>
              {formatedDate(props.data.date)},{" "}
              {formatedHour(props.data.init_time)} -{" "}
              {formatedHour(props.data.final_time)} |{" "}
              {Formatted(props.data.local)}...
            </CardBodyText>
          </CardBodyDate>
        </CardBody>

        <Buttons>
          {props.accomplished ? (
            <SubeventAccomplished>
              <SubeventAccomplishedText>
                Inscrições Encerradas
              </SubeventAccomplishedText>
            </SubeventAccomplished>
          ) : props.data.registered === 0 ? (
            <Enrollment style={{ backgroundColor: "green" }} onPress={() => props.handleEnrollment()}>
              <EnrollmentText>Inscreva-Se</EnrollmentText>
            </Enrollment>
          ) : (
            <Enrollment style={{ backgroundColor: "red" }} onPress={() => props.handleEnrollmentCancel()}>
              <EnrollmentText>Cancelar Inscrição</EnrollmentText>
            </Enrollment>
          )}

          <Details onPress={() => props.handleViewMore(props)}>
            <DetailsText>Ver Detalhes</DetailsText>
          </Details>
        </Buttons>
      </Card>
    </Container>
  );
}

const Container = styled.View`
 margin: 5px 5px;
 align-items: center;
 justify-content: center;
 
`;

const Card = styled.View`
  background-color: #fff;
  width: 100%;
  height: 230px;
  border-radius: 10px;
  border: 2px solid #ccc;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0.7;
`;
const CardTitle = styled.Text`
  font-size: 18px;
  color: #4fa7ff;
  text-align: justify;
`;
const CardSubtitle = styled.Text`
  font-size: 13px;
  color: #000;
`;

const CardBody = styled.View`
  flex-direction: column;
  flex: 1;
`;
const CardVacancias = styled.View`
  padding: 2px 0;
`;

const CardVacanciasText = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 5px;
`;

const CardBodyDate = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  padding: 0 5px;
`;

const CardBodyText = styled.Text`
  color: #626262;
  margin-left: 5px;
`;
const CardBodyTextAuthor = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 5px;
  text-transform: uppercase;
`;

const Buttons = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 5px;
`;

const Enrollment = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px 0;
`;

const EnrollmentText = styled.Text`
  color: #fff;
`;
const SubeventAccomplished = styled.View`
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px 0;
  background-color: #626262;
`;
const SubeventAccomplishedText = styled.Text`
  color: #fff;
`;

const Details = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  border: 1px solid #0b5916;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const DetailsText = styled.Text`
  color: #000;
`;
