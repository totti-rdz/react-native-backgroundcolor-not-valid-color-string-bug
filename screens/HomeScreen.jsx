import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => navigation.navigate("secondary");
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
