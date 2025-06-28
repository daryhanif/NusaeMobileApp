import { DEFAULT_COLOR } from "@/const/color";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputWithIcon from "@/components/InputComponent";
import PasswordInputComponent from "@/components/PasswordInputComponent";
import useLogin from "@/hooks/useLogin";
import { AuthStore } from "@/stores/Auth-Stores";

const LoginPage = () => {
  const { width, height } = Dimensions.get("window");
  const router = useRouter();
  const { loading, error, Login, data } = useLogin();
  const setIsLogin = AuthStore((state) => state.setIsLogin);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const handleLogin = async () => {
    console.log("Login clicked:", { username, password });
    if (!username || !password) {
      alert("Username dan Password wajib diisi!");
      return;
    }
    await Login({ username, password });
  };
  useEffect(() => {
    if (data) {
      console.log(
        "data dalam useEffect:" + JSON.stringify(data, null, 2).toString()
      );

      setIsLogin(true);
      router.replace("/(tabs)/dashboards/dashboard"); // ✅ langsung panggil
    }
  }, [data, router]);
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
      fontFamily: "Poppins-Regular",
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
      justifyContent: "center",
      textAlign: "center",
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
            source={require("@/assets/images/logo_kopi.png")}
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
              <InputWithIcon
                onChange={(e) => {
                  setUsername(e.nativeEvent.text);
                }}
                editable={!loading}
              />
            </View>
            <View>
              <PasswordInputComponent
                onChange={(e) => setPassword(e.nativeEvent.text)}
                editable={!loading}
              />
            </View>

            <View>
              <Pressable
                style={styleLoginPage.LoginButton}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color={"#fff"}></ActivityIndicator>
                ) : (
                  <Text style={{ color: "#fff" }}>Login</Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
