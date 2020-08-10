import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import * as WebBrowser from "expo-web-browser";

const About = () => {
  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync("https://www.google.com/keep/");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.body}>
        Google Keep is a note-taking service developed by Google. This is my
        attempt to copy it :)
      </Text>
      <Button
        title="View original service"
        onPress={handleOpenWithWebBrowser}
      />
    </View>
  );
};

export default About;
