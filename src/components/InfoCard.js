import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function InfoCard({ title, status, onPress }) {
  const selesai = status === "selesai";

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.categoryTag}>AKTIVITAS</Text>

        <View
          style={[
            styles.badge,
            selesai ? styles.badgeSelesai : styles.badgeProses
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              selesai ? styles.textSelesai : styles.textProses
            ]}
          >
            {selesai ? "selesai" : "proses"}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.subLabel}>Tugas Utama</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#FCE7F3"
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },
  categoryTag: {
    fontSize: 11,
    fontWeight: "700",
    color: "#DB2777",
    letterSpacing: 0.5
  },
  badge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  badgeSelesai: {
    backgroundColor: "#DCFCE7"
  },
  badgeProses: {
    backgroundColor: "#FFEDD5"
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700"
  },
  textSelesai: {
    color: "#166534"
  },
  textProses: {
    color: "#C2410C"
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172033",
    lineHeight: 20,
    marginBottom: 14
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subLabel: {
    fontSize: 12,
    color: "#9CA3AF"
  },
  button: {
    backgroundColor: "#E14D85",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700"
  }
});
