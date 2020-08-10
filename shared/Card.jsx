import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  body: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default Card;
