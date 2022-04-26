import * as React from "react";
import { View, SafeAreaView, Platform, Image } from "react-native";
import Text from "../../../components/Text";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../constants/colors";
import { AuthImageBottom } from "../../../components/ui-modules/authImageBottom";
import Button from "../../../components/Button";
import { ConfettiCanon } from "../../../components/Confetti";
import logo from "../../../assets/images/kotoko.png";

const Success = ({ navigation }) => {
  const confettiRef = React.useRef(null);

  const moveToMain = React.useCallback(async () => {
    navigation.navigate("Main", { screen: "home" });
  }, []);

  React.useEffect(() => {
    if (confettiRef) {
      confettiRef?.current?.startConfetti();
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={{ marginBottom: RFValue(20) }}>
            <View style={styles.logoContainer}>
              <Image
                source={logo}
                style={{
                  height: RFValue(80),
                  width: RFValue(80),
                }}
              />
            </View>
            <Text type={"Heavy"} style={styles.title}>
              Success creating
            </Text>
            <Text
              type={"Heavy"}
              style={[styles.title, { color: Colors.primary["600"] }]}
            >
              An Account With Us
            </Text>
            <Text type={"Light"} style={styles.description}>
              You can now donate, see matches and more.
            </Text>
          </View>

          <View>
            <View style={styles.regiterContainer}>
              <Button title={"Start"} onPress={moveToMain} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <AuthImageBottom />
      <ConfettiCanon ref={confettiRef} />
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: { flex: 1, backgroundColor: Colors.white },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: RFValue(30),
  },
  title: {
    ...Platform.select({
      ios: {
        fontSize: RFValue(23),
      },
      android: {
        fontSize: RFValue(25),
        lineHeight: RFValue(30),
      },
    }),
  },
  description: {
    fontSize: RFValue(12),
    color: Colors.gray["500"],
    marginTop: RFValue(10),
  },
  regiterContainer: {
    marginTop: RFValue(40),
    marginBottom: RFValue(100),
  },
  pinviewContainer: {},
  logoContainer: {
    // borderWidth: 1,
    // borderColor: Colors.primary['100'],
    padding: RFValue(5),
    justifyContent: "center",
    marginBottom: RFValue(10),
  },
});
export default Success;
