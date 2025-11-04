import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <Ionicons name="arrow-back" size={24} color="#FF5B13" />
                <Text style={styles.appBarTitle}>Note Details</Text>
            </View>
            <ScrollView>
                <Image
            style={{ width: "100%", height:220 }}
        source={require("@/assets/images/img1.png")} 
        />
        <View style={styles.content}>
        <Text style={styles.title}>Belajar Programming</Text>
        <Text style={styles.date}>Selasa, 13 Mei 2025</Text>
        <Text style={styles.description}>Mulailah dengan memahami dasar JavaScript seperti fungsi, array, dan async/await.
             Pelajari konsep component di React dan gunakan
              functional component serta hooks seperti useState
               dan useEffect.
               
               Bangun proyek kecil seperti to-do list untuk latihan.
                Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging.
                 Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.</Text>
        </View>
        
            </ScrollView>
             <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
        appBar: {
            height: 56,
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 8,
        },
        appBarTitle: {
            fontSize: 20,
            fontWeight: "bold",
        },

        content: {
            padding: 10,
            paddingVertical: 15,
            gap: 6,
        },
        title: {
            fontSize: 16,
            fontWeight: "bold",
        },
        date: {
            fontSize: 14,
            color: "gray",
        },
        description: {
            fontSize: 14,
            textAlign: "justify",
        },
 footerButtons: {
    bottom: -10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  updateButton: {
    flex: 1,
    backgroundColor: "#FF7A00",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 8,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});