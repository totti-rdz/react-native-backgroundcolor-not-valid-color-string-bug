import { Platform, Pressable, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

const HomeScreen = () => {
  const handlePress = () => console.log("hello from console");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Button onPress={handlePress} />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  
});
