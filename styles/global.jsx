import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // Note
  title: {
    fontFamily: "Roboto_400Regular",
    fontSize: 24,
  },
  body: {
    marginBottom: 20,
    fontFamily: "Roboto_300Light",
    fontSize: 20,
  },
  // Modal window
  modalText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
