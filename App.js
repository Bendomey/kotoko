import "react-native-gesture-handler";
import React, { Fragment, useRef } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./source/navigation";
import { NativeModules } from "react-native";

if (Platform.OS === "android") {
  const { UIManager } = NativeModules;
  if (UIManager) {
    // Add gesture specific events to genericDirectEventTypes object
    // exported from UIManager native module.
    // Once new event types are registered with react it is possible
    // to dispatch these events to all kind of native views.
    UIManager.genericDirectEventTypes = {
      ...UIManager.genericDirectEventTypes,
      onGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" },
      onGestureHandlerStateChange: {
        registrationName: "onGestureHandlerStateChange",
      },
    };
  }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "SFProText-Black": require("./source/assets/fonts/SFProText-Black.otf"),
    "SFProText-Bold": require("./source/assets/fonts/SFProText-Bold.otf"),
    "SFProText-Heavy": require("./source/assets/fonts/SFProText-Heavy.otf"),
    "SFProText-UltraLight": require("./source/assets/fonts/SFProText-Ultralight.otf"),
    "SFProText-Light": require("./source/assets/fonts/SFProText-Light.otf"),
    "SFProText-Medium": require("./source/assets/fonts/SFProText-Medium.otf"),
    "SFProText-Regular": require("./source/assets/fonts/SFProText-Regular.otf"),
    "SFProText-SemiBold": require("./source/assets/fonts/SFProText-Semibold.otf"),
    "SFProText-Thin": require("./source/assets/fonts/SFProText-Thin.otf"),
  });

  if (!fontsLoaded) {
    return (
      <Fragment>
        <AppLoading />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <AppNavigator />
      </Fragment>
    );
  }
}
