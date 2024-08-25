import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ICON_URL =
  "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg";

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      {/* Text Area */}
      <View style={styles.topArea}>
        <Text style={styles.placeholderText}>Text here</Text>
      </View>

      {/* Blue Bar with Buttons */}
      <View style={styles.blueBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vocab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Grid of Icons */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {Array.from({ length: 72 }).map((_, index) => (
          <View key={index} style={styles.gridItem}>
            <Image source={{ uri: ICON_URL }} style={styles.icon} />
            <Text style={styles.iconText}>Word #{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topArea: {
    height: "10%",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  placeholderText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 20,
    fontWeight: "bold",
  },
  blueBar: {
    height: 50,
    backgroundColor: "#007bff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  gridItem: {
    width: "7.33%",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 4, // Add this line for horizontal spacing
    borderWidth: 1, // Add this line
    borderColor: "#003366", // Dark blue color
    borderRadius: 5, // Optional: to give rounded corners
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
    color: "#333",
  },
});

export default IndexScreen;
