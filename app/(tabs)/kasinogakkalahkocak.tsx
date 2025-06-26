import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dataToko = [
  {
    id: "1",
    foto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
    nama: "Toko Kopi Agis",
    pemilik: "Pak Agis",
    alamat:
      "Jl. Apel Raya No.4, RT.03/RW.03, Pelem, Kec. Kertosono, Kab. Nganjuk, Jawa Timur",
    noTelp: "08123456789",
    stockMasuk: 120,
    stockKeluar: 50,
    sisaStock: 70,
    longitude: 111.12345,
    latitude: -7.12345,
  },
  {
    id: "2",
    foto: "https://images.unsplash.com/photo-1525909002-298f7b9ce4d0?auto=format&fit=crop&w=80&q=80",
    nama: "Toko Kopi Budi",
    pemilik: "Pak Budi",
    alamat: "Jl. Mangga No.10, Surabaya, Jawa Timur",
    noTelp: "08129876543",
    stockMasuk: 200,
    stockKeluar: 100,
    sisaStock: 100,
    longitude: 112.54321,
    latitude: -7.54321,
  },
];

export default function App() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id: React.SetStateAction<null>) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openMaps = (lat: any, lng: any, nama: any) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    Linking.openURL(url);
  };

  const renderItem = ({ item }: { item: any }) => {
    const isExpanded = expandedId === item.id;
    return (
      <View style={styles.card}>
        <View style={styles.rowMain}>
          <Image source={{ uri: item.foto }} style={styles.foto} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.pemilik}>Pemilik: {item.pemilik}</Text>
            <Text style={styles.sisaStock}>Sisa Stock: {item.sisaStock}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => openMaps(item.latitude, item.longitude, item.nama)}
          >
            <Ionicons name="map" size={28} color="#007AFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => toggleExpand(item.id)}
          >
            <Ionicons
              name={isExpanded ? "chevron-up" : "chevron-down"}
              size={28}
              color="#333"
            />
          </TouchableOpacity>
        </View>
        {isExpanded && (
          <View style={styles.expandSection}>
            <Text style={styles.detailText}>Alamat: {item.alamat}</Text>
            <Text style={styles.detailText}>No Telp: {item.noTelp}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={[styles.tableCell, { flex: 1 }]}>
                    Stock Masuk
                  </Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>
                    Stock Keluar
                  </Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>Longitude</Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>Latitude</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableCell, { flex: 1 }]}>
                    {item.stockMasuk}
                  </Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>
                    {item.stockKeluar}
                  </Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>
                    {item.longitude}
                  </Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>
                    {item.latitude}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Toko Kopi</Text>
      <FlatList
        data={dataToko}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: "#f9f9f9" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rowMain: { flexDirection: "row", alignItems: "center" },
  foto: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#ddd" },
  nama: { fontSize: 18, fontWeight: "bold" },
  pemilik: { fontSize: 14, color: "#555", marginTop: 4 },
  sisaStock: { marginTop: 6, fontWeight: "600", color: "#2e7d32" },
  iconButton: {
    marginLeft: 12,
    padding: 6,
  },
  expandSection: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 12,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    minWidth: 350,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tableHeader: {
    backgroundColor: "#f1f1f1",
  },
  tableCell: {
    fontSize: 14,
    color: "#555",
  },
});
