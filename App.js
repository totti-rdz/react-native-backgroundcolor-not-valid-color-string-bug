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
          <Stack.Screen name="home" component={HomeScreen} options={{ title: "Home", headerShown: false }} />
          <Stack.Screen
            name="secondary"
            component={SecondaryScreen}
            // invalid color string doesn't throw an error but leads to weird overlapping of screens while navigating
            options={{ title: "Secondary", contentStyle: { backgroundColor: "test-no-color" } }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
