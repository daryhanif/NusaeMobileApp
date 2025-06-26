import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { DEFAULT_COLOR } from "./const/color";
import { AuthStore } from "./stores/Auth-Stores";

export default function RootLayout() {
  // ambil nilai state dan method dari store
  const isLogin = AuthStore((state) => state.isLogin);
  const setIsLogin = AuthStore((state) => state.setIsLogin);

  useEffect(() => {
    async function getData() {
      // SecureStore.deleteItemAsync("accessToken");
      const OS = Platform.OS;
      const accsessToken =
        OS === "web"
          ? localStorage.getItem("accessToken")
          : await SecureStore.getItemAsync("accessToken");
      if (!accsessToken) {
        return setIsLogin(false);
      }
      if (accsessToken) {
        return setIsLogin(true);
      }
    }
    getData();
  }, []);

  const styleLoginPage = StyleSheet.create({
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
    <Stack>
      <Stack.Protected guard={!isLogin}>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isLogin}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerLeft: () => (
              <View style={styleLoginPage.logoContainer}>
                <Image
                  source={require("./assets/images/logo_kopi.png")}
                  style={styleLoginPage.logo}
                />

                <Text style={styleLoginPage.logoText}>Kopi Nusae </Text>
              </View>
            ),
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
