import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import Search from "../../../assets/Icons/search.svg";
import Bell from "../../../assets/Icons/bell.svg";
import Colors from "../../../utils/Colors";
import { Pressable } from "react-native";

const Komunitas = () => {
  const [textClamp, setTextClamp] = useState(2);
  const [isClamp, setIsClamp] = useState(true);
  const ClampHandle = () => {
    setIsClamp(!isClamp);
    textClamp === 2 ? setTextClamp(0) : setTextClamp(2);
  };
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
          elevation: 2,
          borderBottomWidth: 0.8,
          borderBottomColor: Colors.border,
        }}
      >
        <FontAwesome5 name="chevron-left" size={20} color={Colors.black} />
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
              borderColor: Colors.border,
              backgroundColor: "#fff",
              elevation: 2,
              color: Colors.black,
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
              backgroundColor: Colors.red,
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
          source={require("../../../assets/Images/People/rifki.jpg")}
        ></Image>
      </View>

      <View
        style={{
          paddingTop: 10,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{ borderBottomWidth: 3, borderBottomColor: Colors.border }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 13,
              paddingHorizontal: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  borderRadius: 50,
                  width: 43,
                  height: 43,
                  marginRight: 7,
                }}
                source={require("../../../assets/Images/People/rifki.jpg")}
              ></Image>
              <View>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 17, fontWeight: "700" }}
                >
                  george_ikki
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 12, fontWeight: "400" }}
                >
                  Universitas Jenderal Soedirman
                </Text>
              </View>
            </View>

            <Ionicons name="ellipsis-vertical" size={22} color={Colors.black} />
          </View>
          <Text
            numberOfLines={textClamp}
            style={{ paddingHorizontal: 5, fontSize: 16, marginBottom: 3 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit delectus vel nihil quam nostrum dolor eveniet eos
            quae, adipisci corrupti a. Ullam saepe nesciunt recusandae quam
            molestias pariatur minus nam!
          </Text>
          {isClamp ? (
            <Pressable
              onPress={ClampHandle}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "#9b9b9b" }}>Selengkapnya</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={ClampHandle}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "#9b9b9b" }}>Lihat sedikit</Text>
            </Pressable>
          )}
          <Image
            style={{ width: "100%", height: 250 }}
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
                width: "50%",
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
                <Ionicons name="heart-outline" size={20} color={Colors.black} />
                <Text style={{ marginLeft: 5 }}>100</Text>
              </View>
            </View>
            <View
              style={{
                width: "50%",
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
                  name="chatbubble-outline"
                  size={20}
                  color={Colors.black}
                />
                <Text style={{ marginLeft: 5 }}>100</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 5,
              borderTopWidth: 1,
              borderTopColor: Colors.border,
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                marginRight: 10,
              }}
              source={require("../../../assets/Images/People/darimun.jpg")}
            ></Image>
            <Text numberOfLines={2} style={{ width: "87%", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              fuga numquam tempore reprehenderit. Assumenda cumque blanditiis
              perspiciatis recusandae quia dolorum!
            </Text>
          </View>
        </View>

        <View
          style={{ borderBottomWidth: 3, borderBottomColor: Colors.border }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 13,
              paddingHorizontal: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  borderRadius: 50,
                  width: 43,
                  height: 43,
                  marginRight: 7,
                }}
                source={require("../../../assets/Images/People/user-1.png")}
              ></Image>
              <View>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 17, fontWeight: "700" }}
                >
                  whoami_
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 12, fontWeight: "400" }}
                >
                  SMKN 2 Purbalingga
                </Text>
              </View>
            </View>

            <Ionicons name="ellipsis-vertical" size={22} color={Colors.black} />
          </View>
          <Text
            numberOfLines={textClamp}
            style={{ paddingHorizontal: 5, fontSize: 16, marginBottom: 3 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            enim et quasi inventore nisi atque maxime vel sit. Nemo, repellat!
          </Text>
          {isClamp ? (
            <Pressable
              onPress={ClampHandle}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "#9b9b9b" }}>Selengkapnya</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={ClampHandle}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "#9b9b9b" }}>Lihat sedikit</Text>
            </Pressable>
          )}
          <Image
            style={{ width: "100%", height: 250 }}
            source={require("../../../assets/Images/Komunitas/1a-2-by-adit_aw-740x492.jpg")}
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
                width: "50%",
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
                <Ionicons name="heart-sharp" size={20} color={Colors.red} />
                <Text style={{ marginLeft: 5 }}>100</Text>
              </View>
            </View>
            <View
              style={{
                width: "50%",
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
                  name="chatbubble-outline"
                  size={20}
                  color={Colors.black}
                />
                <Text style={{ marginLeft: 5 }}>100</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 5,
              borderTopWidth: 1,
              borderTopColor: Colors.border,
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                marginRight: 10,
              }}
              source={require("../../../assets/Images/People/img3.jpg")}
            ></Image>
            <Text numberOfLines={2} style={{ width: "87%", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              fuga numquam tempore reprehenderit. Assumenda cumque blanditiis
              perspiciatis recusandae quia dolorum!
            </Text>
          </View>
        </View>

        <View
          style={{ borderBottomWidth: 3, borderBottomColor: Colors.border }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 13,
              paddingHorizontal: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  borderRadius: 50,
                  width: 43,
                  height: 43,
                  marginRight: 7,
                }}
                source={require("../../../assets/Images/People/user-3.png")}
              ></Image>
              <View>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 17, fontWeight: "700" }}
                >
                  Jancoekk_
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 12, fontWeight: "400" }}
                >
                  Institute Teknologi Bandung
                </Text>
              </View>
            </View>

            <Ionicons name="ellipsis-vertical" size={22} color={Colors.black} />
          </View>
          <Text
            numberOfLines={textClamp}
            style={{ paddingHorizontal: 5, fontSize: 16, marginBottom: 3 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            enim et quasi inventore nisi atque maxime vel sit. Nemo, repellat!
          </Text>
          {isClamp ? (
            <Pressable
              onPress={ClampHandle}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "#9b9b9b" }}>Selengkapnya</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={ClampHandle}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "#9b9b9b" }}>Lihat sedikit</Text>
            </Pressable>
          )}
          <Image
            style={{ width: "100%", height: 250 }}
            source={require("../../../assets/Images/Komunitas/workingspace.jpg")}
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
                width: "50%",
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
                <Ionicons name="heart-sharp" size={20} color={Colors.red} />
                <Text style={{ marginLeft: 5 }}>100</Text>
              </View>
            </View>
            <View
              style={{
                width: "50%",
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
                  name="chatbubble-outline"
                  size={20}
                  color={Colors.black}
                />
                <Text style={{ marginLeft: 5 }}>100</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 5,
              borderTopWidth: 1,
              borderTopColor: Colors.border,
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                marginRight: 10,
              }}
              source={require("../../../assets/Images/People/img2.jpg")}
            ></Image>
            <Text numberOfLines={2} style={{ width: "87%", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              fuga numquam tempore reprehenderit. Assumenda cumque blanditiis
              perspiciatis recusandae quia dolorum!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Komunitas;

const styles = StyleSheet.create({});
