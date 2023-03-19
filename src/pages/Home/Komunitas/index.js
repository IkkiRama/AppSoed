import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";

import Search from "../../../assets/Icons/search.svg";
import Bell from "../../../assets/Icons/bell.svg";
import Colors from "../../../utils/Colors";
import { StackActions } from "@react-navigation/native";

const Komunitas = ({ navigation }) => {
  const [textClamp, setTextClamp] = useState(2);
  const [isClamp, setIsClamp] = useState(true);
  const ClampHandle = () => {
    setIsClamp(!isClamp);
    textClamp === 2 ? setTextClamp(0) : setTextClamp(2);
  };
  return (
    <ScrollView>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.dispatch(StackActions.replace("HomeMain"))}
        >
          <FontAwesome5 name="chevron-left" size={20} color={Colors.black} />
        </Pressable>
        <View
          style={{ width: "70%", position: "relative", marginHorizontal: 7 }}
        >
          <TextInput
            placeholder="Mau Cari apa..."
            style={styles.search}
          ></TextInput>
          <Search style={{ position: "absolute", top: 6, left: 3 }}></Search>
        </View>

        <View style={{ position: "relative", marginRight: 7 }}>
          <Bell
            width={27}
            height={27}
            style={{ color: Colors.black, backgroundColor: "transparent" }}
          ></Bell>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>10</Text>
          </View>
        </View>

        <Image
          style={{ width: 33, height: 33, borderRadius: 50 }}
          source={require("../../../assets/Images/People/rifki.jpg")}
        ></Image>
      </View>

      <View style={styles.post}>
        <View style={styles.detail}>
          <View style={styles.profile}>
            <View style={styles.biodata}>
              <Image
                style={styles.foto}
                source={require("../../../assets/Images/People/rifki.jpg")}
              ></Image>
              <View>
                <Text numberOfLines={1} style={styles.username}>
                  george_ikki
                </Text>
                <Text numberOfLines={1} style={styles.tempat}>
                  Universitas Jenderal Soedirman
                </Text>
              </View>
            </View>

            <Ionicons name="ellipsis-vertical" size={22} color={Colors.black} />
          </View>
          <Text numberOfLines={textClamp} style={styles.mainText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit delectus vel nihil quam nostrum dolor eveniet eos
            quae, adipisci corrupti a. Ullam saepe nesciunt recusandae quam
            molestias pariatur minus nam!
          </Text>
          {isClamp ? (
            <Pressable onPress={ClampHandle} style={styles.selengkapnya}>
              <Text style={{ color: "#9b9b9b" }}>Selengkapnya</Text>
            </Pressable>
          ) : (
            <Pressable onPress={ClampHandle} style={styles.selengkapnya}>
              <Text style={{ color: "#9b9b9b" }}>Lihat sedikit</Text>
            </Pressable>
          )}
          <Image
            style={styles.mainImage}
            source={require("../../../assets/Images/Komunitas/calendar-works.jpg")}
          ></Image>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "96%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e7e7e7",
                  borderRadius: 40,
                  paddingVertical: 7,
                }}
              >
                <Octicons name="thumbsup" size={20} color={Colors.black} />
                <Text style={{ marginLeft: 5, color: Colors.black }}>100</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "96%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e7e7e7",
                  borderRadius: 40,
                  paddingVertical: 7,
                }}
              >
                <Octicons name="thumbsdown" size={20} color={Colors.black} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "96%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e7e7e7",
                  borderRadius: 40,
                  paddingVertical: 7,
                }}
              >
                <Ionicons
                  name="ios-bookmark-outline"
                  size={20}
                  color={Colors.black}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              paddingBottom: 10,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("DetailPostingan")}
              style={{
                padding: 10,
                width: "100%",
                borderRadius: 10,
                backgroundColor: "#e7e7e7",
              }}
            >
              <Text
                style={{ fontSize: 15, marginBottom: 10, color: Colors.black }}
              >
                <Text style={{ fontWeight: "700" }}>Komentar </Text>320
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    marginRight: 10,
                  }}
                  source={require("../../../assets/Images/People/darimun.jpg")}
                ></Image>
                <Text
                  numberOfLines={2}
                  style={{ width: "87%", fontSize: 13, color: Colors.black }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fuga numquam tempore reprehenderit. Assumenda cumque
                  blanditiis perspiciatis recusandae quia dolorum!
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.detail}>
          <View style={styles.profile}>
            <View style={styles.biodata}>
              <Image
                style={styles.foto}
                source={require("../../../assets/Images/People/rifki.jpg")}
              ></Image>
              <View>
                <Text numberOfLines={1} style={styles.username}>
                  george_ikki
                </Text>
                <Text numberOfLines={1} style={styles.tempat}>
                  Universitas Jenderal Soedirman
                </Text>
              </View>
            </View>

            <Ionicons name="ellipsis-vertical" size={22} color={Colors.black} />
          </View>
          <Text numberOfLines={textClamp} style={styles.mainText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit delectus vel nihil quam nostrum dolor eveniet eos
            quae, adipisci corrupti a. Ullam saepe nesciunt recusandae quam
            molestias pariatur minus nam!
          </Text>
          {isClamp ? (
            <Pressable onPress={ClampHandle} style={styles.selengkapnya}>
              <Text style={{ color: "#9b9b9b" }}>Selengkapnya</Text>
            </Pressable>
          ) : (
            <Pressable onPress={ClampHandle} style={styles.selengkapnya}>
              <Text style={{ color: "#9b9b9b" }}>Lihat sedikit</Text>
            </Pressable>
          )}
          <Image
            style={styles.mainImage}
            source={require("../../../assets/Images/Komunitas/calendar-works.jpg")}
          ></Image>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "96%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e7e7e7",
                  borderRadius: 40,
                  paddingVertical: 7,
                }}
              >
                <Octicons name="thumbsup" size={20} color={Colors.black} />
                <Text style={{ marginLeft: 5, color: Colors.black }}>100</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "96%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e7e7e7",
                  borderRadius: 40,
                  paddingVertical: 7,
                }}
              >
                <Octicons name="thumbsdown" size={20} color={Colors.black} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "96%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e7e7e7",
                  borderRadius: 40,
                  paddingVertical: 7,
                }}
              >
                <Ionicons
                  name="ios-bookmark-outline"
                  size={20}
                  color={Colors.black}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              paddingBottom: 10,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("DetailPostingan")}
              style={{
                padding: 10,
                width: "100%",
                borderRadius: 10,
                backgroundColor: "#e7e7e7",
              }}
            >
              <Text
                style={{ fontSize: 15, marginBottom: 10, color: Colors.black }}
              >
                <Text style={{ fontWeight: "700" }}>Komentar </Text>320
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    marginRight: 10,
                  }}
                  source={require("../../../assets/Images/People/darimun.jpg")}
                ></Image>
                <Text
                  numberOfLines={2}
                  style={{ width: "87%", fontSize: 13, color: Colors.black }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fuga numquam tempore reprehenderit. Assumenda cumque
                  blanditiis perspiciatis recusandae quia dolorum!
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Komunitas;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 35,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 2,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.border,
  },

  search: {
    paddingLeft: 25,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 0.7,
    borderColor: Colors.border,
    backgroundColor: "#fff",
    elevation: 2,
    color: Colors.black,
    fontSize: 16,
    fontWeight: "500",
  },
  badge: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -5,
    left: 10,
    borderRadius: 5,
    backgroundColor: Colors.red,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
  post: {
    backgroundColor: "#fff",
  },
  detail: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.border,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: 5,
  },
  biodata: {
    flexDirection: "row",
    alignItems: "center",
  },

  foto: {
    borderRadius: 50,
    width: 43,
    height: 43,
    marginRight: 7,
  },
  username: { fontSize: 17, fontWeight: "700", color: Colors.black },
  tempat: { fontSize: 12, fontWeight: "400", color: Colors.black },
  mainImage: { width: "100%", height: 250 },

  mainText: {
    paddingHorizontal: 5,
    fontSize: 16,
    marginBottom: 3,
    color: Colors.black,
  },
  selengkapnya: {
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});
