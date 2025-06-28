import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { DEFAULT_COLOR } from "../../const/color";

export default function TabsLayout() {
  const MainPage = [
    {
      name: "dashboards/dashboard",
      title: "Dashboard",
      icon: ({ color }: { color: string }) => (
        <Feather name="home" size={24} color={color} />
      ),
    },
    {
      name: "PurchaseOrder/PurchaseOrder",
      title: "PurchaseOrder",
      icon: ({ color }: { color: string }) => (
        <MaterialIcons name="attach-money" size={24} color={color} />
      ),
    },
    {
      name: "SalesReport/SalesReport",
      title: "Laporan Penjualan",
      icon: ({ color }: { color: string }) => (
        <MaterialCommunityIcons name="finance" size={24} color={color} />
      ),
    },
    {
      name: "Stores/Stores",
      title: "Toko",
      icon: ({ color }: { color: string }) => (
        <FontAwesome5 name="store" size={24} color={color} />
      ),
    },
    {
      name: "Account/Account",
      title: "Akun",
      icon: () => (
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={{ width: 24, height: 24, borderRadius: 12 }}
        />
      ),
    },
  ];
  return (
    <View style={style.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: DEFAULT_COLOR.primary, // ubah warna latar tab bar
            borderTopColor: DEFAULT_COLOR.secondary, // hilangkan garis atas tab bar jika perlu
          },
          tabBarActiveTintColor: DEFAULT_COLOR.secondary, // warna ikon aktif
          tabBarInactiveTintColor: DEFAULT_COLOR.background, // warna ikon tidak aktif
        }}
      >
        {MainPage.map((page) => (
          <Tabs.Screen
            key={page.name}
            name={page.name}
            options={{
              title: page.title,
              tabBarIcon: page.icon,
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
