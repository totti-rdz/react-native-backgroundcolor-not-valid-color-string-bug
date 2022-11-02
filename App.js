import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeScreen />
    </NavigationContainer>
  );
}
