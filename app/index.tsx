import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Index() {
  const [nama, setNama] = useState<string>('');
  const [kelas, setKelas] = useState<string>('');
  const [hobi, setHobi] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Data Diri Saya</Text>

      <Text>Nama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama kamu"
        value={nama}
        onChangeText={setNama}
      />

      <Text>Kelas:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan kelas kamu"
        value={kelas}
        onChangeText={setKelas}
      />

      <Text>Hobi:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan hobi kamu"
        value={hobi}
        onChangeText={setHobi}
      />

      <Text style={styles.footer}>Terima kasih sudah mengisi data!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  footer: {
    marginTop: 10,
  },
});
