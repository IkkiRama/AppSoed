import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

import Search from "../../../assets/Icons/search.svg";
import Bell from "../../../assets/Icons/bell.svg";
import Colors from "../../../utils/Colors";

const Komunitas = () => {
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          paddingTop: 35,
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          elevation: 1,
        }}
      >
        <FontAwesome name="chevron-left" size={20} color={Colors.black} />
        <View
          style={{ width: "70%", position: "relative", marginHorizontal: 7 }}
        >
          <TextInput
            placeholder="Mau Cari apa..."
            style={{
              paddingLeft: 25,
              paddingVertical: 3,
              borderRadius: 8,
              borderWidth: 0.7,
              borderColor: "#DBDEE2",
              backgroundColor: "#fff",
              elevation: 2,
              color: "#212121",
              fontSize: 16,
              fontWeight: "500",
            }}
          ></TextInput>
          <Search style={{ position: "absolute", top: 6, left: 3 }}></Search>
        </View>

        <View style={{ position: "relative", marginRight: 7 }}>
          <Bell
            width={27}
            height={27}
            style={{ color: Colors.black, backgroundColor: "transparent" }}
          ></Bell>
          <View
            style={{
              width: 18,
              height: 18,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: -5,
              left: 10,
              borderRadius: 5,
              backgroundColor: "#E02954",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              10
            </Text>
          </View>
        </View>

        <Image
          style={{ width: 33, height: 33, borderRadius: 50 }}
          source={require("../../../assets/Images/rifki.jpg")}
          // resizeMode="cover"
        ></Image>
      </View>
    </ScrollView>
  );
};

export default Komunitas;

const styles = StyleSheet.create({});
