import DEFAULT_COLOR from "@/app/const/color";
import { Image } from "expo-image";
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputWithIcon from "../components/InputComponent";
import PasswordInputComponent from "../components/PasswordInputComponent";
const LoginPage = () => {
  const { width, height } = Dimensions.get("window");

  const safeAreaInsets = useSafeAreaInsets();
  const styleLoginPage = StyleSheet.create({
    mainContainer: {
      paddingTop: safeAreaInsets.top,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: DEFAULT_COLOR.secondary,
      flex: 1,
    },
    container: {
      borderRadius: 5,
      flexDirection: "column",
      backgroundColor: DEFAULT_COLOR.background,
      width: width,
      height: height,
      flex: 1,
      gap: 2,
    },
    logoContainer: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "row",

      width: "100%",
      height: "20 %",
      borderBottomWidth: 1,
    },
    formContainer: {
      paddingTop: 20,
      marginHorizontal: 20,
      width: "auto",
      height: "auto",
      flexDirection: "column",
      gap: 10,
    },
    logoText: {
      fontSize: 20,
      fontWeight: "bold",
      color: DEFAULT_COLOR.text,
      marginVertical: 20,
    },
    logo: {
      width: 50,
      height: 50,
    },
    LoginButton: {
      backgroundColor: DEFAULT_COLOR.primary,
      padding: 10,
      borderRadius: 5,
      color: DEFAULT_COLOR.background,
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: DEFAULT_COLOR.text,
    },
  });

  return (
    <View style={styleLoginPage.mainContainer}>
      <View style={styleLoginPage.container}>
        <View style={styleLoginPage.logoContainer}>
          <Image
            source={require("../assets/images/logo_kopi.png")}
            style={styleLoginPage.logo}
          />
          <Text style={styleLoginPage.logoText}>Kopi Nusae </Text>
        </View>
        <View style={styleLoginPage.formContainer}>
          <View>
            <Text style={styleLoginPage.title}>Login</Text>
            <Text>Silahkan Login Ke Akun Anda</Text>
          </View>
          <View>
            <View>
              <InputWithIcon />
            </View>
            <View>
              <PasswordInputComponent />
            </View>

            <View>
              <Pressable disabled={false} style={styleLoginPage.LoginButton}>
                <Text style={styleLoginPage.LoginButton}>Login</Text>
                <ActivityIndicator></ActivityIndicator>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
