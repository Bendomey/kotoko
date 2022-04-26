import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../../components/Text";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../../constants/colors";

const { width } = Dimensions.get("window");

const SingleCard = ({ data, onPress, bgColor, textColor }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.container, { backgroundColor: bgColor }]}
      >
        <View style={styles.iconContainer}>
          <Feather
            name={data?.icon}
            color={textColor || Colors.primary["700"]}
            size={RFValue(25)}
          />
        </View>
        <Text
          style={{
            // color: Colors.primary["700"],
            textAlign: "center",
            fontSize: RFValue(10),
          }}
        >
          {data?.label}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 4,
    height: width / 4,
    margin: RFValue(8),
    // backgroundColor: Colors.gray["50"],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RFValue(7),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: RFValue(50),
    width: RFValue(60),
  },
});

SingleCard.defaultProps = {
  textColor: Colors.primary["700"],
};

export default SingleCard;
