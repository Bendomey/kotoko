import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import StartScreen from "./start";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import VerifyRegisterScreen from "./vertify-register";
import SuccessScreen from "./success";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName={"start"}>
        <Stack.Screen
          name={"start"}
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"login"}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"register"}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"verify-register"}
          component={VerifyRegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"success"}
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Fragment>
  );
};

export default AuthNavigator;
