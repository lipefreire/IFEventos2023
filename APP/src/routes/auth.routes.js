import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from '../views/SingIn';
import SignUp from "../views/SignUp";

const Stack = createNativeStackNavigator();

export default function Auth(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }}  />
        <Stack.Screen name="Register" component={SignUp} options={{ headerShown: false }}  />
    </Stack.Navigator>

    )
}


