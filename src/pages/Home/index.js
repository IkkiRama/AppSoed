// In Home.js in a new project
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMain from "./Home";

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
    </Stack.Navigator>
  );
}

export default Home;
