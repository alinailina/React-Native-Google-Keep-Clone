import React from "react";

//Stack navigator
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Screens
import About from "../screens/About";

// Shared components
import Header from "../shared/Header";

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title="About" />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
