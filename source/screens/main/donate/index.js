import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import Colors from "../../../constants/colors";
import SelectOperator from "./components/select-operator";

const Donate = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ marginTop: RFValue(20) }}>
            <SelectOperator />
          </View>
          <View style={{ marginTop: RFValue(15) }}>
            <TextInput label="Name" placeholder="eg. Samuel" />
          </View>
          <View style={{ marginTop: RFValue(15) }}>
            <TextInput label="Number" placeholder="eg. 0544001489" />
          </View>
          <View style={{ marginTop: RFValue(20) }}>
            <Button title="Make Donations" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: RFValue(20),
  },
});

export default Donate;
