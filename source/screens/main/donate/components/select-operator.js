import * as React from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import Text from "../../../../components/Text";
import Colors from "../../../../constants/colors";
import ActionSheet from "react-native-actionsheet";
import { RFValue } from "react-native-responsive-fontsize";

const SelectOperator = () => {
  const [operatorSelected, setOperatorSelected] = React.useState(null);
  const ActionSheetRef = React.useRef();

  const chooseOperator = async (index) => {
    /* set to mtn */
    if (index === 0) {
      setOperatorSelected("MTN Momo");
    }

    /* set to vodafone */
    if (index === 1) {
      setOperatorSelected("Voda Cash");
    }

    /* set to airteltigo */
    if (index === 2) {
      setOperatorSelected("AirtelTigo Cash");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginRight: RFValue(20) }}>
          <Text type={"SemiBold"}>Operator</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => ActionSheetRef?.current.show()}
          >
            <Text
              style={{
                color: operatorSelected
                  ? Colors.gray["600"]
                  : Colors.gray["400"],
              }}
            >
              {operatorSelected || "Please select an operator"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ActionSheet
        ref={ActionSheetRef}
        title={"Which operator do you want go to with ?"}
        options={["MTN Momo", "Voda Cash", "AirtelTigo Cash", "cancel"]}
        cancelButtonIndex={3}
        onPress={chooseOperator}
      />
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
});

export default SelectOperator;
