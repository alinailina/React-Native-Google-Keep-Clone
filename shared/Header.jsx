import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Get 100vw
import { Dimensions } from "react-native";
var width = Dimensions.get("window").width;

const Header = ({ navigation, title }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Ionicons
        style={styles.icon}
        name="ios-menu"
        size={40}
        color="black"
        onPress={openDrawer}
      />
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  header: {
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    left: 20,
  },
});

export default Header;
