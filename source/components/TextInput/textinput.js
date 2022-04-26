import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Text from "../Text";

const NewTextInput = (props) => {
  return (
    <>
      <View
        style={[
          styles.container,
          (!props.multiline || !props.value) && styles.centerContainer,
        ]}
      >
        <View style={{ marginRight: RFValue(20) }}>
          <Text type={"SemiBold"}>{props.label}</Text>
        </View>
        <TextInput
          selectionColor={Colors.primary["600"]}
          {...props}
          style={[props.style, styles.textInput]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: Colors.gray["200"],
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(13),
        borderRadius: 10,
        flexDirection: "row",
      },
      android: {
        borderWidth: 1,
        borderColor: Colors.gray["200"],
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(3),
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      },
    }),
  },
  textInput: {
    flex: 1,
  },
  centerContainer: { alignItems: "center" },
});

NewTextInput.defaultProps = {
  label: "Label",
};

export default NewTextInput;
