import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
export default function PasswordInputComponent() {
  const [togglePassword, setTogglePassword] = useState<boolean>(true);
  const [focusInput, setFocusInput] = useState<boolean>(false);

  return (
    <View
      style={[styles.mainContainer, focusInput && styles.mainContainerFocused]}
    >
      <Feather name="lock" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        secureTextEntry={togglePassword}
        onFocus={() => {
          setFocusInput(true);
        }}
        onBlur={() => {
          setFocusInput(false);
        }}
        placeholder="Password asu"
      ></TextInput>
      <Pressable
        onPress={() => {
          setTogglePassword(!togglePassword);
        }}
        style={{
          position: "absolute",
          right: 10,
          backgroundColor: "red",
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {togglePassword ? (
          <Feather name="eye-off" size={24} color="black" />
        ) : (
          <Feather name="eye" size={24} color="black" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 11,
    marginVertical: 8,
    height: 50,
  },

  mainContainerFocused: {
    borderColor: "#8B4513", // Warna coklat saat fokus
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    width: "auto",
    height: 50,
    backgroundColor: "blue",
  },
  // input: pla,
});
