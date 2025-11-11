import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
    require("@/assets/images/img1.png"),
    require("@/assets/images/img2.png"),
    require("@/assets/images/img3.png"),
    require("@/assets/images/img4.png"),
];

export default function AddScreen(){
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<number>(0);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="#FF5B13" />
                </TouchableOpacity>
                
                <Text style={styles.appBarTitle}>Add Notes</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.inputTitle} 
                placeholder="Note Title" 
                selectionColor="#FF5B13" 
                />

                <TextInput style={styles.inputContent} 
                placeholder="Note Content" 
                selectionColor="#FF5B13" 
                textAlignVertical="top"
                multiline={true}
                />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {images.map((img, index) => (
                        <TouchableOpacity 
                        key={index}
                        style={[styles.boximage,
                             selectedImage === index &&
                              styles.imageSelected]}
                        onPress={() => setSelectedImage(index)}
                        >
                 <Image 
                         style={styles.image}
                         source={img} 
                         />
                </TouchableOpacity>
                    ))}
                    
                </ScrollView>
                <View style={styles.footerButtons}>
                        <TouchableOpacity style={styles.addButton}>
                          <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                      </View>
                
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
        form: {
            padding: 10,
        },
        inputTitle: {
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#ccc",
            padding: 15,
            marginBottom: 10,
        },
        inputContent: {
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#ccc",
            padding: 15,
            marginBottom: 10,
            height: 150,
        },
        boximage: {
            height: 100,
            width: 100,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            marginRight: 10,
        },
        image: {
            width: "100%",
            height: "100%",
            borderRadius: 8,
        },
        imageSelected: {
            borderColor: "#FF5B13",
        },

    footerButtons: {
    bottom: -330,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingVertical: 16,
  },
  addButton: {
    flex: 1,
    backgroundColor: "#FF7A00",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});