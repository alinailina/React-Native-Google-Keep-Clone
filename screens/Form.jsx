import React from "react";
import { View, TextInput, Text } from "react-native";
import { globalStyles } from "../styles/global.jsx";
import { Formik } from "formik";

// Validation schema
import * as yup from "yup";
const NoteSchema = yup.object({
  title: yup.string().label("Title").required().min(5),
  body: yup.string().label("Note").required().min(10),
});

import Button from "../shared/Button";

const Form = ({ addNote }) => {
  return (
    <View>
      <Formik
        initialValues={{
          title: "",
          body: "",
        }}
        validationSchema={NoteSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addNote(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.title}
              placeholder="Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              style={[globalStyles.body, globalStyles.marginTop]}
              placeholder="Note"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <Button text="Add note" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
