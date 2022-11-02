import { StyleSheet, Text, View } from "react-native";

const SecondaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello again!</Text>
    </View>
  );
};
export default SecondaryScreen;

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
