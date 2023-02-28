import { View, Text } from "react-native";

import {
  FontAwesome5,
  MaterialIcons,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
const Fitur = () => {
  return (
    <View
      style={{
        marginTop: -30,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#FDF2F0",
          }}
        >
          <FontAwesome5 name="university" size={24} color="#DE644A" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Tilik Fakultas
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#FCFBE8",
          }}
        >
          <FontAwesome5 name="users" size={24} color="#F6A316" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Komunitas
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#F2F9F1",
          }}
        >
          <FontAwesome5 name="volleyball-ball" size={24} color="#60A85E" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Info UKM
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#EFF6FE",
          }}
        >
          <FontAwesome5 name="opencart" size={24} color="#448BDE" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Merch
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#F1F6FB",
          }}
        >
          <Ionicons name="md-albums" size={30} color="#4C89CB" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Layanan Unsoed
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#F2F9F1",
          }}
        >
          <Ionicons
            name="md-game-controller-outline"
            size={30}
            color="#60A85E"
          />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Games
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#FDF2F0",
          }}
        >
          <Fontisto name="podcast" size={24} color="#DE644A" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Podcast
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 7,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 70,
            height: 50,
            elevation: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#FCFBE8",
          }}
        >
          <MaterialIcons name="my-library-books" size={24} color="#F6A316" />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 11, marginTop: 5 }}>
          Komik
        </Text>
      </View>
    </View>
  );
};

export default Fitur;
