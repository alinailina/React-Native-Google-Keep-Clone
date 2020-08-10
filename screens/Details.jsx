import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

// Shared components
import Card from "../shared/Card";

const Details = ({ route }) => {
  const { title } = route.params;
  const { body } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{title}</Text>
        <Text style={[globalStyles.body, globalStyles.marginTop]}>{body}</Text>
      </Card>
    </View>
  );
};

export default Details;
