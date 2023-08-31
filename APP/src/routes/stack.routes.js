import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/Home";
import EventDetails from "../views/EventDetails";
import EventProgrammation from "../views/EventProgrammation";
import EventProgrammationDetails from "../views/EventProgrammationDetails";

import Event from "../views/Events";

import User from "../views/User";
import EventsRegistered from "../views/EventsRegistered";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Evento"
        component={EventDetails}
        options={{ headerTitle: "Detalhes do Evento" }}
      />
      <Stack.Screen
        name="Programação"
        component={EventProgrammation}
        options={{ headerTitle: "Programação do Evento" }}
      />
      <Stack.Screen
        name="Detalhes"
        component={EventProgrammationDetails}
        options={{ headerTitle: "Detalhes da Atividade" }}
      />
    </Stack.Navigator>
  );
};

export { HomeScreen };

const Events = () => {
  return (
    <Stack.Navigator initialRouteName="Eventos">
      <Stack.Screen
        name="Eventos"
        component={Event}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Evento"
        component={EventDetails}
        options={{ headerTitle: "Detalhes do Evento" }}
      />
      <Stack.Screen
        name="Programação"
        component={EventProgrammation}
        options={{ headerTitle: "Programação do Evento" }}
      />
      <Stack.Screen
        name="Detalhes"
        component={EventProgrammationDetails}
        options={{ headerTitle: "Detalhes da Atividade" }}
      />
    </Stack.Navigator>
  );
};
export { Events };

const UserScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={User}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventsRegistered"
        component={EventsRegistered}
        options={{ headerTitle: "Eventos Inscritos" }}
      />
       <Stack.Screen
        name="Evento"
        component={EventDetails}
        options={{ headerTitle: "Detalhes do Evento" }}
      />
      <Stack.Screen
        name="Programação"
        component={EventProgrammation}
        options={{ headerTitle: "Programação do Evento" }}
      />
      <Stack.Screen
        name="Detalhes"
        component={EventProgrammationDetails}
        options={{ headerTitle: "Detalhes da Atividade" }}
      />
    </Stack.Navigator>
  );
};
export { UserScreen };
