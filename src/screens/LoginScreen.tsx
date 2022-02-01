import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput as RnTextInput, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/colors";

export default function App() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to STARTPORT</Text>
      <TextInput
        autoComplete="email"
        placeholder="Email"
        style={styles.input}
        onChangeText={onChangeText}
      />
      <TextInput
        autoComplete="password"
        placeholder="Password"
        style={styles.input}
        onChangeText={onChangeText}
      />

      <Button mode="outlined" onPress={() => onChangeText(text)}>
        login
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 30,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 0,
    width: 200,
    margin: 8,
    padding: 10,
  },
  text: {},
});
