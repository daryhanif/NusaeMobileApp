import { Feather } from "@expo/vector-icons"; // pastikan expo install @expo/vector-icons
import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

const InputWithIcon = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <Feather name="user" size={20} color="#8e8e8e" style={styles.icon} />
      <TextInput
        {...props}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#999"
        placeholder={"username"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 8,
    height: 50,
  },
  containerFocused: {
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
  },
});

export default InputWithIcon;
