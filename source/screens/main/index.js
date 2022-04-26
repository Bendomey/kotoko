import React, { Fragment } from "react";
import { TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

//import screens
import HomeScreen from "./home";
import DonateScreen from "./donate";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName={"home"}>
        <Stack.Screen
          name={"home"}
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Asante Kotoko S.C.",
            headerLeft: null,
            headerRight: () => (
              <View style={{ marginRight: RFValue(10) }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Auth", { screen: "start" })
                  }
                >
                  <Ionicons
                    name="ios-log-out-outline"
                    size={RFValue(25)}
                    color={Colors.red}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name={"donate"}
          component={DonateScreen}
          options={{
            title: "Make your donations",
            headerTitleStyle: {
              color: Colors.black,
            },
            headerBackTitleVisible: false,
            headerTintColor: Colors.primary["600"],
          }}
        />
      </Stack.Navigator>
    </Fragment>
  );
};

export default MainNavigator;
