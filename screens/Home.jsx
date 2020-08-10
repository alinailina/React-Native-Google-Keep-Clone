import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";

// Shared components
import Card from "../shared/Card";

// Form
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      body: "Lorem ipsum dolor sit amet",
      key: "1",
    },
    {
      title: "Note 2",
      body: "Lorem ipsum dolor sit amet",
      key: "2",
    },
    {
      title: "Note 3",
      body: "Lorem ipsum dolor sit amet",
      key: "3",
    },
  ]);
  const addNote = (note) => {
    note.key = Math.random().toString();
    setNotes((currentNotes) => {
      return [note, ...currentNotes];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <Ionicons
              name="ios-close"
              size={40}
              color="black"
              onPress={() => setModalOpen(false)}
            />
            <Text style={globalStyles.modalText}>New note:</Text>
            <Form addNote={addNote} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Ionicons
        style={styles.addIcon}
        name="ios-add"
        size={40}
        color="black"
        onPress={() => setModalOpen(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addIcon: {
    alignSelf: "flex-end",
  },
});

export default Home;
