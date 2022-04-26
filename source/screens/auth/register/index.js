import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import Colors from "../../../constants/colors";
import { appName } from "../../../constants/misc";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import logo from "../../../assets/images/kotoko.png";
import { AuthImageBottom } from "../../../components/ui-modules/authImageBottom";

const isLoading = false;
const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const goback = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleRegister = () => {
    navigation.push("verify-register");
  };
  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        style={{ backgroundColor: Colors.white }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={logo}
            style={{
              height: RFValue(80),
              width: RFValue(80),
            }}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={{ marginTop: RFValue(10) }}>
            <TextInput
              autoCapitalize={"none"}
              label={"Name"}
              placeholder={"Name"}
            />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <TextInput
              value={email}
              autoCapitalize={"none"}
              onChangeText={setEmail}
              label={"Email"}
              placeholder={"Email"}
            />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              label={"Password"}
              placeholder={"Password"}
              secureTextEntry
            />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              label={"Confirm Password"}
              placeholder={"Password"}
              secureTextEntry
            />
          </View>
        </View>

        <View>
          <Button
            loading={isLoading}
            title={"Register"}
            onPress={handleRegister}
          />
          <View style={styles.regiterContainer}>
            <Text>Already have account?</Text>
            <TouchableOpacity
              onPress={goback}
              style={{ marginTop: RFValue(5) }}
            >
              <Text style={{ color: Colors.yellow["600"] }}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <AuthImageBottom />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: RFValue(40),
  },
  title: { textAlign: "center", fontSize: RFValue(23) },
  regiterContainer: {
    alignItems: "center",
    marginTop: RFValue(20),
    marginBottom: RFValue(100),
  },
  textInputContainer: {
    marginVertical: RFValue(20),
  },
});

export default Login;
