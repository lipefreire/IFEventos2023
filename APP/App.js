import { StatusBar } from "expo-status-bar";
import theme from "./src/config/theme";

import React from "react";
import Router from "./src/routes";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          style="light"
          backgroundColor={theme.colors.primary}
          translucent={false}
        />
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}
