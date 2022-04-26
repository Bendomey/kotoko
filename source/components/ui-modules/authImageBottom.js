import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { View, Image } from "react-native";
import Wave from "../svg/verifywave";
import vetImage from "../../assets/images/Asante-Kotoko-vs-Etoile-Line-up-1000x600.jpg";

const { width } = Dimensions.get("window");

const AuthImageBottom = () => {
  return (
    <>
      <View style={styles.bottomImageContainer}>
        <View style={styles.waveDesign}>
          <Wave height={RFValue(80)} width={width} />
        </View>
        <Image
          source={vetImage}
          style={styles.bottomImage}
          resizeMode={"cover"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomImageContainer: {
    position: "absolute",
    bottom: RFValue(0),
  },
  bottomImage: {
    height: RFValue(130),
    width: width,
  },
  waveDesign: { position: "absolute", bottom: RFValue(80), zIndex: 1 },
});

export { AuthImageBottom };
