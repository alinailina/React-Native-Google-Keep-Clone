import React from "react";

// Fonts
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";

// Navigation container
import { NavigationContainer } from "@react-navigation/native";

// Root navigator
import RootDrawer from "./routes/RootDrawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
}
