import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SecondaryScreen from "./screens/SecondaryScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </>
  );
}
