// In Home.js in a new project
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMain from "./Home";
import MediaPartner from "./Media Partner";
import Podcast from "./Podcast";
import Komunitas from "./Komunitas";
import LayananUnsoed from "./Layanan Unsoed";
import InfoUKM from "./Info UKM";
import Merch from "../Merch";
import Games from "./Games";
import Komik from "./Komik";
import TilikFakultas from "./Tilik Fakultas";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        animationEnabled: false,
        animation: "none",
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="Podcast" component={Podcast} />
      <Stack.Screen name="Komunitas" component={Komunitas} />
      <Stack.Screen name="LayananUnsoed" component={LayananUnsoed} />
      <Stack.Screen name="InfoUKM" component={InfoUKM} />
      <Stack.Screen name="Merch" component={Merch} />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Komik" component={Komik} />
      <Stack.Screen name="TilikFakultas" component={TilikFakultas} />
    </Stack.Navigator>
  );
}

export default Home;
