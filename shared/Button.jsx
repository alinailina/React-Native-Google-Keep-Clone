import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 20,
    backgroundColor: "#0000EE",
    marginVertical: 20,
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default Button;
