import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import Text from "../../../components/Text";
import Colors from "../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import banner from "../../../assets/images/Asante-Kotoko-vs-Etoile-Line-up-1000x600.jpg";
import ServiceCard from "./component/service-card";

const Home = ({ navigation }) => {
  const services = [
    {
      label: "Donate Amount",
      icon: "dollar-sign",
      navigation: () => {
        // setTitle('Accounts');
        // setShowAccounts(true);
        navigation.push("donate");
      },
      bgColor: "#ECFDF5",
      textColor: "#047857",
    },
    {
      label: "Matches",
      icon: "calendar",
      navigation: () => {
        // setTitle('Balances');
        // setShowAccounts(true);
      },
      bgColor: "#FEF2F2",
      textColor: "#B91C1C",
    },
    {
      label: "Team Players",
      icon: "users",
      navigation: () => {
        // navigation.navigate('Deposits');
      },
      bgColor: "#EFF6FF",
      textColor: "#1D4ED8",
    },
    {
      label: "Buy Now",
      icon: "archive",
      navigation: () => {
        // setShowInvestments(true);
      },
      bgColor: "#EEF2FF",
      textColor: "#4338CA",
    },
    {
      label: "Settings",
      icon: "sliders",
      navigation: () => {
        // navigation.navigate('Statements');
      },
      bgColor: "#F9FAFB",
      textColor: "#374151",
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={{ marginTop: RFValue(10) }}>
            <Text
              type={"Bold"}
              style={{
                fontSize: RFValue(20),
                color: Colors.gray["900"],
                textAlign: "center",
              }}
            >
              Good day Samuel!
            </Text>
            <Text
              type="Light"
              style={{
                marginHorizontal: RFValue(30),
                textAlign: "center",
                marginTop: RFValue(10),
              }}
            >
              We have a match today! Stay tuned and be supportive. Don't forget
              to send in your predictions and donations :)
            </Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{ marginHorizontal: RFValue(20), marginTop: RFValue(20) }}
          >
            <Text
              style={{
                fontSize: RFValue(15),
                color: Colors.gray["900"],
              }}
            >
              Latest News
            </Text>
            <View style={{ marginTop: RFValue(10) }}>
              <Image
                source={banner}
                style={{
                  height: RFValue(150),
                  width: "100%",
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                marginHorizontal: RFValue(25),
                marginTop: RFValue(20),
                marginBottom: RFValue(5),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(15),
                  color: Colors.gray["900"],
                }}
              >
                Quick Actions
              </Text>
            </View>
            <ScrollView style={{}}>
              <View style={styles.getMenus}>
                {services.map((service, serviceIdx) => (
                  <ServiceCard
                    key={serviceIdx}
                    data={service}
                    onPress={service.navigation}
                    bgColor={service.bgColor}
                    textColor={service.textColor}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  getMenus: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default Home;
