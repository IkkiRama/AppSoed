import { useState } from "react";
import { Image } from "react-native";
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Navbar from "../../components/Navbar";

import Fitur from "../../components/Fitur";

const HomeMain = () => {
  const [EventUtama, setEventUtama] = useState([
    {
      image: require("../../assets/Images/s3.jpeg"),
    },
    {
      image: require("../../assets/Images/porsoed.png"),
    },
    {
      image: require("../../assets/Images/desa.png"),
    },
    {
      image: require("../../assets/Images/fosa.png"),
    },
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View
          style={{
            flex: 1,
            backgroundColor: "#1E61D4",
          }}
        >
          <View
            style={{
              paddingTop: 40,
              paddingBottom: 20,
              paddingHorizontal: 10,
            }}
          >
            <Navbar></Navbar>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Hii, Rifki Romadhan
            </Text>
          </View>

          {/* slider */}
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 5,
              marginTop: 50,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <FlatList
                data={EventUtama}
                horizontal
                style={{
                  width: "90%",
                  position: "relative",
                  top: -50,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Image
                    source={item.image}
                    style={{
                      margin: 5,
                      height: 120,
                      width: 300,
                      borderRadius: 10,
                    }}
                    resizeMode={"contain"}
                  ></Image>
                )}
              ></FlatList>
            </View>

            {/* Fitur */}
            <Fitur></Fitur>

            {/* Merch */}
            <View></View>

            {/* Artikel */}
            {/* Series */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({});
