// In App.js in a new project
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import Artikel from "./src/pages/Artikel";
import Adkesma from "./src/pages/Adkesma";
import Merch from "./src/pages/Merch";
import Profil from "./src/pages/Profil";

import {
  MaterialIcons,
  Foundation,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  numberFormat = (num) =>
    "Rp" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let IconName;
            if (route.name === "Home") {
              IconName = (
                <Foundation
                  name="home"
                  size={24}
                  color={focused ? "#1E61D4" : "#6D7588"}
                />
              );
            } else if (route.name === "Artikel") {
              IconName = (
                <MaterialIcons
                  name="article"
                  size={24}
                  color={focused ? "#1E61D4" : "#6D7588"}
                />
              );
            } else if (route.name === "Merch") {
              IconName = (
                <FontAwesome
                  name="opencart"
                  size={24}
                  color={focused ? "#1E61D4" : "#6D7588"}
                />
              );
            } else if (route.name === "Adkesma") {
              IconName = (
                <Ionicons
                  name="chatbox"
                  size={24}
                  color={focused ? "#1E61D4" : "#6D7588"}
                />
              );
            } else if (route.name === "Profil") {
              IconName = (
                <Ionicons
                  name="person"
                  size={24}
                  color={focused ? "#1E61D4" : "#6D7588"}
                />
              );
            }
            return IconName;
          },
          header: () => null,
          tabBarActiveTintColor: "#1E61D4",
          tabBarInactiveTintColor: "#6D7588",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (routeName === "TilikFakultas") {
              return { display: "none" };
            } else if (routeName === "Podcast") {
              return { display: "none" };
            } else if (routeName === "Komunitas") {
              return { display: "none" };
            } else if (routeName === "InfoUKM") {
              return { display: "none" };
            } else if (routeName === "Games") {
              return { display: "none" };
            } else if (routeName === "Komik") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Artikel" component={Artikel} />
        <Tab.Screen name="Merch" component={Merch} />
        <Tab.Screen name="Adkesma" component={Adkesma} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
