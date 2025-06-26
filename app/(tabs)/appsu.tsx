import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function StoreCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Bagian 1: Detail Toko */}
        <View style={styles.section}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300?img=4" }}
            style={styles.image}
          />
          <Text style={styles.title}>Toko Modern Sejahtera</Text>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Pemilik:</Text>
            <Text style={styles.value}>Budi Santoso</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Alamat:</Text>
            <Text style={styles.value}>Jl. Merdeka No.123, Bandung</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Google Maps:</Text>
            <Text style={styles.link}>https://maps.google.com/abc</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Koordinat:</Text>
            <Text style={styles.value}>-6.9147, 107.6098</Text>
          </View>
        </View>

        {/* Bagian 2: Stok Toko */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Stok Toko</Text>
          {[...Array(5)].map((_, i) => (
            <Text key={i} style={styles.stockItem}>
              • Produk {i + 1} - 20 pcs
            </Text>
          ))}
        </View>

        {/* Tombol Aksi */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit" size={16} color="#fff" />
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Feather name="trash-2" size={16} color="#fff" />
            <Text style={styles.buttonText}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#374151",
  },
  detailRow: {
    marginBottom: 6,
  },
  label: {
    fontSize: 13,
    color: "#6b7280",
  },
  value: {
    fontSize: 14,
    color: "#111827",
  },
  link: {
    fontSize: 13,
    color: "#2563eb",
    textDecorationLine: "underline",
  },
  stockItem: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  editButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
