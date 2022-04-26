import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import Colors from "../../../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import logo from "../../../assets/images/kotoko.png";
import { AuthImageBottom } from "../../../components/ui-modules/authImageBottom";

const isLoading = false;
const VerifyRegister = ({ navigation }) => {
  const [email, setEmail] = React.useState("");

  const gotToLostPassword = React.useCallback(() => {}, [navigation]);

  const handleVerify = () => {
    navigation.push("success");
  };
  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        style={{ backgroundColor: Colors.white }}
      >
        <View style={{ alignItems: "center", marginBottom: RFValue(30) }}>
          <Image
            source={logo}
            style={{
              height: RFValue(80),
              width: RFValue(80),
            }}
          />
        </View>

        <Text type={"Light"} style={styles.description}>
          Kindly enter the 4-digit code sent to this email address:{" "}
          <Text type={"SemiBold"} style={{ color: Colors.yellow["600"] }}>
            samuel@gmail.com
          </Text>
        </Text>

        <View style={styles.textInputContainer}>
          <View>
            <TextInput
              value={email}
              autoCapitalize={"none"}
              onChangeText={setEmail}
              label={"Code"}
              placeholder={"123456"}
            />
          </View>
        </View>

        <View>
          <Button loading={isLoading} title={"Verify"} onPress={handleVerify} />
          <View style={styles.regiterContainer}>
            <Text>Didn't receive code?</Text>
            <TouchableOpacity
              onPress={gotToLostPassword}
              style={{ marginTop: RFValue(5) }}
            >
              <Text style={{ color: Colors.yellow["600"] }}>Retry</Text>
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

export default VerifyRegister;
