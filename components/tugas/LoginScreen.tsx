import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Form Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email kamu"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan password kamu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
    alignItems: "center",
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#212121",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
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
  button: {
    marginTop: 10,
    backgroundColor: "#2196f3",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
