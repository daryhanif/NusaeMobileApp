import React from "react";
import { View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export default function cards(Children: React.ReactNode, styles: ViewStyle) {
  return <View style={styles}>{Children}</View>;
}
