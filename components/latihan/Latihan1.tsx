import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Latihan1() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [hobi, setHobi] = useState("");

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Aplikasi Data Diri Saya</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nama:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama kamu"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Kelas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan kelas kamu"
          value={kelas}
          onChangeText={setKelas}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hobi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan hobi kamu"
          value={hobi}
          onChangeText={setHobi}
        />
      </View>

      <Text style={styles.footer}>Terima kasih sudah mengisi data!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#e8f5e9",
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
    alignItems: "center",
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2e7d32",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  footer: {
    marginTop: 10,
    color: "#444",
  },
});
