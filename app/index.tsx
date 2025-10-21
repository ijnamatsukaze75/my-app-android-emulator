import Latihan1 from "@/components/latihan/Latihan1";
import LoginScreen from "@/components/tugas/LoginScreen";
import React from "react";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingVertical: 30,
      }}
    >
      <Latihan1 />
      <LoginScreen />
    </ScrollView>
  );
}
