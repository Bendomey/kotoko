import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Colors from "../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { AboutCard } from "./components/aboutCard";
import logo from "../../../assets/images/kotoko.png";
import { appName } from "../../../constants/misc";

const data = [
  {
    icon: "ios-card-outline",
    title: "Take Donations",
    description: "Fans are able to send in their donations",
  },
  {
    icon: "ios-calendar-outline",
    title: "Team Schedule",
    description: "Fans gets to view team's schedules on matches",
  },
  {
    icon: "ios-albums-outline",
    title: "Kotoko Artifacts",
    description:
      "Fans gets to order kotoko products. Exampple, player's jerseys",
  },
];

const Start = ({ navigation }) => {
  const goToLogin = React.useCallback(() => {
    navigation.push("login");
  }, [navigation]);

  const goToRegister = React.useCallback(() => {
    navigation.push("register");
  }, [navigation]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <View>
            <View>
              <Image
                source={logo}
                style={{
                  height: RFValue(70),
                  width: RFValue(70),
                  marginBottom: RFValue(20),
                }}
              />
            </View>
            <Text type={"Heavy"} style={styles.titleStyle}>
              Welcome to the
            </Text>
            <Text type={"Heavy"} style={[styles.titleStyle, styles.vetName]}>
              {appName} Page
            </Text>
          </View>
          <View style={styles.aboutContainer}>
            {data?.map((aboutForOne, i) => (
              <React.Fragment key={i}>
                <View
                  style={{
                    ...Platform.select({
                      ios: {
                        marginBottom: RFValue(30),
                      },
                      android: {
                        marginBottom: RFValue(20),
                      },
                    }),
                  }}
                >
                  <AboutCard data={aboutForOne} />
                </View>
              </React.Fragment>
            ))}
          </View>
          <View>
            <Button title={"Sign In"} onPress={goToLogin} />
            <View style={styles.regiterContainer}>
              <Text>Not registered?</Text>
              <TouchableOpacity
                onPress={goToRegister}
                style={{ marginTop: RFValue(5) }}
              >
                <Text style={{ color: Colors.yellow["600"] }}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: RFValue(35),
  },
  titleStyle: {
    fontSize: RFValue(27),
  },
  aboutContainer: {
    marginTop: RFValue(30),
  },
  regiterContainer: {
    alignItems: "center",
    marginTop: RFValue(10),
    ...Platform.select({
      ios: {
        marginTop: RFValue(20),
      },
    }),
  },
  vetName: {
    color: Colors.primary["600"],
    ...Platform.select({
      android: {
        marginTop: RFValue(-20),
      },
    }),
  },
});

export default Start;
