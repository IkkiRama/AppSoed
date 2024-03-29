import { useState } from "react";
import { Image, ImageBackground, Pressable } from "react-native";
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Navbar from "../../components/Navbar";

import Fiturs from "../../components/Fiturs";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../utils/Colors";

const HomeMain = ({ navigation }) => {
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

  const [Merchandise, setMerchandise] = useState([
    {
      image: require("../../assets/Images/Merch/merch1.jpg"),
      nama: "Baju Programmer anti murtad",
      hargaAsli: 200000,
      hargaDiskon: 130000,
    },

    {
      image: require("../../assets/Images/Merch/merch2.jpg"),
      nama: "Kaos Gensoed",
      hargaAsli: 120000,
      hargaDiskon: 90000,
    },

    {
      image: require("../../assets/Images/Merch/merch3.jpg"),
      nama: "Kaos Lengan Panjang Gensoed",
      hargaAsli: 140000,
      hargaDiskon: 100000,
    },

    {
      image: require("../../assets/Images/Merch/merch4.jpg"),
      nama: "Paket 5 Gensoed Merch",
      hargaAsli: 280000,
      hargaDiskon: 200000,
    },

    {
      image: require("../../assets/Images/Merch/merch5.jpg"),
      nama: "Paket 6 Gensoed Merch",
      hargaAsli: 300000,
      hargaDiskon: 210000,
    },

    {
      image: require("../../assets/Images/Merch/merch6.jpg"),
      nama: "Paket 3 Gensoed Merch",
      hargaAsli: 200000,
      hargaDiskon: 130000,
    },
  ]);

  const [SeriesArtikel, setSeriesArtikel] = useState([
    {
      image: require("../../assets/Images/Artikel/Series1.jpg"),
      nama: "Mengupas Tuntas Perkembangan Teknologi Terkini",
      jumlah: 20,
    },
    {
      image: require("../../assets/Images/Artikel/series2.jpeg"),
      nama: "Menggali Potensi Bisnis Online: Strategi dan Tips Sukses",
      jumlah: 24,
    },

    {
      image: require("../../assets/Images/Artikel/series3.jpeg"),
      nama: "Membangun Karir di Era Digital: Tantangan dan Peluang",
      jumlah: 44,
    },

    {
      image: require("../../assets/Images/Artikel/series4.jpg"),
      nama: "Menjelajahi Budaya Populer Dunia: Film, Musik, dan Game",
      jumlah: 17,
    },

    {
      image: require("../../assets/Images/Artikel/BABI.jpg"),
      nama: "Membangun Kemandirian Finansial: Tips dan Trik Mengelola Uang",
      jumlah: 19,
    },

    {
      image: require("../../assets/Images/Artikel/Series6.jpg"),
      nama: "Menjaga Kesehatan Mental di Tengah Kesibukan Modern",
      jumlah: 31,
    },

    {
      image: require("../../assets/Images/Artikel/Series7.jpg"),
      nama: "Membangun Hidup yang Berkelanjutan: Ide dan Inovasi Ramah Lingkungan",
      jumlah: 42,
    },
  ]);

  const [Podcast, setPodcast] = useState([
    {
      image: require("../../assets/Images/Podcast/Podcast1.jpeg"),
      nama: "Menjelajahi Dunia Kuliner: Makanan, Minuman, dan Resep-resep Lezat",
      author: "Rifki Romadhan",
    },

    {
      image: require("../../assets/Images/Podcast/Podcast2.jpeg"),
      nama: "Mendiskusikan Isu-isu Kesehatan Mental dan Kesejahteraan Emosional",
      author: "Athar Rizki Yudistira",
    },

    {
      image: require("../../assets/Images/Podcast/Podcast3.jpeg"),
      nama: "Mendiskusikan Isu-isu Feminisme dan Kesetaraan Gender",
      author: "Feillany Maemu Rizki",
    },

    {
      image: require("../../assets/Images/Podcast/Podcast4.jpeg"),
      nama: "Membahas Berbagai Aspek Pariwisata: Destinasi Wisata, Pengalaman, dan Tips Bepergian",
      author: "Raditya Dika",
    },

    {
      image: require("../../assets/Images/Podcast/Podcast5.jpeg"),
      nama: "Menggali Sejarah dan Budaya Populer di Berbagai Negara",
      author: "Dedi Botak",
    },

    {
      image: require("../../assets/Images/Podcast/Podcast6.png"),
      nama: "Membahas Berbagai Macam Genre Musik dari Masa ke Masa",
      author: "Raynold Chin",
    },

    {
      image: require("../../assets/Images/Podcast/Podcast7.jpeg"),
      nama: "Membahas Berbagai Teknologi Terapan: Internet of Things, Artificial Intelligence, dan Lain-lain",
      author: "Chairul Tanjung",
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
            backgroundColor: Colors.primary,
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

            {/* Fiturs */}
            <Fiturs navigation={navigation}></Fiturs>

            {/* Merch */}
            <View style={{ marginTop: 30 }}>
              <Text style={styles.headerSection}>Gensoed Merch</Text>
              <Text style={styles.paragrafSection}>
                Beli merchandise spesial dari BEM UNSOED
              </Text>

              <FlatList
                data={Merchandise}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 15 }}
                renderItem={({ item }) => (
                  <Pressable style={{ width: 170, marginHorizontal: 5 }}>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: 170,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      source={item.image}
                    ></Image>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontWeight: "700",
                        fontSize: 17,
                        marginBottom: 5,
                      }}
                    >
                      {item.nama}
                    </Text>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          textDecorationLine: "line-through",
                          color: "#fa3f52",
                          fontWeight: "500",
                          fontSize: 11,
                        }}
                      >
                        {numberFormat(item.hargaAsli)}
                      </Text>

                      <Text
                        style={{
                          color: "#212121",
                          fontWeight: "600",
                          marginLeft: 10,
                          fontSize: 13,
                        }}
                      >
                        {numberFormat(item.hargaDiskon)}
                      </Text>
                    </View>
                  </Pressable>
                )}
              ></FlatList>
            </View>

            {/* Series Artikel */}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.headerSection}>Series Artikel</Text>
              <Text style={styles.paragrafSection}>
                Nikmati Series Artikel dari BEM UNSOED
              </Text>

              <FlatList
                data={SeriesArtikel}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 15 }}
                renderItem={({ item }) => (
                  <Pressable style={{ margin: 5 }}>
                    <ImageBackground
                      source={item.image}
                      resizeMode="cover"
                      style={{
                        width: 170,
                        height: 250,
                        overflow: "hidden",
                        justifyContent: "flex-end",
                      }}
                      imageStyle={{ borderRadius: 10 }}
                    >
                      <LinearGradient
                        colors={[
                          "transparent",
                          "#3d3d3d",
                          "#3a3a3a",
                          "#303030",
                        ]}
                        style={{
                          width: "100%",
                          height: 170,
                          padding: 10,
                          paddingTop: 60,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          numberOfLines={2}
                        >
                          {item.nama}
                        </Text>
                        <Text
                          style={{
                            marginTop: 7,
                            fontSize: 12,
                            fontWeight: "600",
                            color: "#fff",
                          }}
                        >
                          {item.jumlah} Artikel
                        </Text>
                      </LinearGradient>
                    </ImageBackground>
                  </Pressable>
                )}
              ></FlatList>
            </View>
          </View>
        </View>

        {/* Podcast */}
        <View
          style={{
            marginTop: 20,
            paddingBottom: 20,
            backgroundColor: Colors.primary,
            // borderTopLeftRadius: 10,
            // borderTopRightRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 22,
              padding: 10,
              paddingBottom: 0,
              color: "#fff",
            }}
          >
            Rekomendasi Podcast
          </Text>
          <Text style={{ fontSize: 14, color: "#fff", paddingLeft: 10 }}>
            Jangan Kelewatan Podcast Favorit Gensoed
          </Text>

          <FlatList
            data={Podcast}
            horizontal
            style={{ marginTop: 15 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  width: 220,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: Colors.description,
                  elevation: 1,
                  backgroundColor: "#fff",
                  margin: 5,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginBottom: 10,
                  }}
                  source={item.image}
                ></Image>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <View style={{ width: "80%", paddingRight: 5 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#212121",
                        fontWeight: "700",
                      }}
                      numberOfLines={1}
                    >
                      {item.nama}
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#212121",
                      }}
                    >
                      {item.author}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: "20%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="play-outline"
                      size={24}
                      color="black"
                      style={{
                        padding: 7,
                        elevation: 3,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            )}
          ></FlatList>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  headerSection: {
    fontWeight: "700",
    fontSize: 22,
    color: "#212121",
  },

  paragrafSection: { fontSize: 14, color: Colors.description },
});
