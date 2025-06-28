import RootContainer from "@/components/rootContainer";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function dashboard() {
  return (
    <RootContainer>
      <View style={style.WellcomeContainer}>
        <Text style={style.WellcomeContainerText}>
          Selamat Datang, USER AWOWOWOWOWOWK JOWKOWI
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Dashboard</Text>
      </View>
    </RootContainer>
  );
}
const style = StyleSheet.create({
  WellcomeContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "red",
    alignItems: "flex-start",
    textAlign: "left",
    paddingLeft: 10,
    marginTop: 10,
  },
  WellcomeContainerText: {
    fontSize: 20,
    fontFamily: "NunitoBold",
  },
});
