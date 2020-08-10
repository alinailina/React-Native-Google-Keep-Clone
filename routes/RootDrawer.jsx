import React from "react";

// Drawer navigator
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

// Nested stack navigators
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const RootDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default RootDrawer;
