import Entypo from "@expo/vector-icons/Entypo";
import { StyleSheet, TextStyle, View } from "react-native";

const TextComponent = ({
  withButton = false,
  withLogo = false,
  textProp,
  styleProp,
}: {
  withButton?: boolean;
  withLogo?: boolean;
  textProp: string | number;
  styleProp?: TextStyle;
}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      position: "relative",
      width: "100%",
      height: 20,
      backgroundColor: "red",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "black",
    },
    logoContainer: {
      position: "absolute",
      width: 20,
      height: 20,
      alignItems: "center",
      alignContent: "center",
      display: withLogo ? "flex" : "none",
    },
    buttonContainer: {
      position: "absolute",
      width: 20,
      height: 20,
      alignItems: "center",
      alignContent: "center",
      display: withButton ? "flex" : "none",
    },
    textContainer: {
      position: "absolute",
      width: 20,
      height: "auto",
      alignItems: "center",
      alignContent: "center",
      display: withButton ? "flex" : "none",
    },
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Entypo name="user" size={24} color="black" />
      </View>
      <View>
        {/* <InputTextComponent placeholder={textProp} styleProp={styles.} /> */}
      </View>
    </View>
  );
};

export default TextComponent;
