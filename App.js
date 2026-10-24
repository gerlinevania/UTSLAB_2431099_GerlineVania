import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  StyleSheet
} from "react-native";

import InfoCard from "./src/components/InfoCard";

const DAFTAR_MAHASISWA = [
  { id: "1", nama: "Alifia Putri", prodi: "Sistem Informasi" },
  { id: "2", nama: "Budi Santoso", prodi: "Teknologi Informasi" },
  { id: "3", nama: "Citra Dewi", prodi: "Sistem Informasi" },
  { id: "4", nama: "Dimas Anggara", prodi: "Teknik Informatika" },
  { id: "5", nama: "Eka Nur Safitri", prodi: "Sistem Informasi" }
];

export default function App() {
  const [keyword, setKeyword] = useState("");

  const hasilFilter = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())
  );

  const handlePress = (title) => {
    console.log("Detail ditekan untuk:", title);
  };

  const renderMahasiswa = ({ item }) => (
    <View style={styles.studentCard}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.nama
            .split(" ")
            .map((kata) => kata[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </Text>
      </View>

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.nama}</Text>
        <Text style={styles.prodi}>{item.prodi}</Text>
      </View>
    </View>
  );

  const header = (
    <View>
      {/* Brand App */}
      <View style={styles.topHeader}>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.appName}>Taskie</Text>
      </View>

      {/* Section 1: InfoCard */}
      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>STATUS PROYEK & TUGAS</Text>
        <Text style={styles.countBadgePinkText}>2 Aktivitas</Text>
      </View>

      <InfoCard
        title="Tugas UTS Lab Perancangan Aplikasi Mobile"
        status="selesai"
        onPress={() =>
          handlePress("Tugas UTS Lab Perancangan Aplikasi Mobile")
        }
      />

      <InfoCard
        title="Proposal Seminar Sistem Informasi"
        status="proses"
        onPress={() => handlePress("Proposal Seminar Sistem Informasi")}
      />

      {/* Section 2: Search Bar & Direktori Mahasiswa */}
      <View style={[styles.sectionTitleRow, { marginTop: 12 }]}>
        <Text style={styles.sectionTitle}>DIREKTORI MAHASISWA</Text>
        <Text style={styles.countGrayText}>5 Mahasiswa</Text>
      </View>

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor="#9CA3AF"
          value={keyword}
          onChangeText={setKeyword}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF5F7" />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.content}
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        renderItem={renderMahasiswa}
        ListHeaderComponent={header}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          </View>
        }
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF5F7"
  },
  list: {
    flex: 1
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32
  },
  topHeader: {
    marginBottom: 20,
    marginTop: 4
  },
  welcomeText: {
    fontSize: 12,
    color: "#E14D85",
    fontWeight: "600"
  },
  appName: {
    fontSize: 26,
    fontWeight: "800",
    color: "#172033",
    marginTop: 2
  },
  sectionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#4B5563",
    letterSpacing: 0.5
  },
  countBadgePinkText: {
    color: "#E14D85",
    fontSize: 11,
    fontWeight: "700"
  },
  countGrayText: {
    color: "#9CA3AF",
    fontSize: 11,
    fontWeight: "600"
  },
  searchWrapper: {
    marginBottom: 12
  },
  searchInput: {
    height: 46,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FCE7F3",
    paddingHorizontal: 16,
    fontSize: 13,
    color: "#172033"
  },
  studentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FCE7F3",
    padding: 12,
    marginBottom: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },
  avatarText: {
    color: "#166534",
    fontWeight: "800",
    fontSize: 13
  },
  studentInfo: {
    flex: 1
  },
  studentName: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "700"
  },
  prodi: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 2
  },
  emptyBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FEE2E2",
    marginTop: 4
  },
  emptyText: {
    color: "#EF4444",
    fontSize: 13,
    fontWeight: "700"
  }
});