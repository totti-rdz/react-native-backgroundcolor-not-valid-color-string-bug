import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SecondaryScreen from "./screens/SecondaryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={{ title: "Home" }} />
          <Stack.Screen name="secondary" component={SecondaryScreen} options={{ title: "Secondary" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
