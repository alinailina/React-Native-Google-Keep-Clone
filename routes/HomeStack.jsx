import React from "react";

//Stack navigator
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// Screens
import Home from "../screens/Home";
import Details from "../screens/Details";

// Shared components
import Header from "../shared/Header";

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Google keep" />
          ),
        })}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
