import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { DEFAULT_COLOR } from "@/const/color";

export default function RootContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScrollView style={style.rootContainer}>{children}</ScrollView>;
}
const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: DEFAULT_COLOR.background,
    width: "100%",
    height: "100%",
  },
});
