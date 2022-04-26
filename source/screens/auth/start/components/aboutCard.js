import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Text from "../../../../components/Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const AboutCard = ({ data }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginRight: RFValue(14) }}>
          <Ionicons
            name={data?.icon}
            color={Colors.yellow["500"]}
            size={RFValue(40)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            type={"SemiBold"}
            style={{
              ...Platform.select({
                ios: { marginBottom: RFValue(3) },
                android: { marginBottom: RFValue(0), lineHeight: RFValue(17) },
              }),
            }}
          >
            {data?.title}
          </Text>
          <Text type={"light"}>{data?.description}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export { AboutCard };
