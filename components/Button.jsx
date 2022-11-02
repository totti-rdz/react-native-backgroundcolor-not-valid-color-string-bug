import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        android_ripple={{ color: "lightblue" }}
        onPress={onPress}
      >
        <View style={styles.buttonInnerContainer}>
          <Text style={styles.text}>Click me!</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 8,
  },
  button: {
    backgroundColor: "blue",
  },
  pressed: {
    opacity: 0.5,
  },
  buttonInnerContainer: {
    margin: 8,
  },
  text: {
    color: "white",
  },
});
