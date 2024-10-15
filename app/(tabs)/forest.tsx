import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Speech from "expo-speech";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TabParamList } from "@/app/(tabs)/_layout";
import { forest } from "@/constants/assets/forest";
import { SentenceContext } from "@/contexts/SentenceContext";

const AnimalsScreen = () => {
  const navigator = useNavigation<NavigationProp<TabParamList>>();

  const { sentence, setSentence } = useContext(SentenceContext);

  const handlePress = (destination: string) => {
    setSentence(sentence ? `${sentence} ${destination as string}` : destination as string);

    Speech.speak(destination);
  };

  return (
    <View style={styles.container}>
      {/* Text Area */}
      <View style={styles.topArea}>
        <Text style={styles.placeholderText}>
          {sentence || "Start speaking...."}
        </Text>
      </View>

      {/* Blue Bar with Buttons */}
      <View style={styles.blueBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigator.navigate("Settings")}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigator.navigate("Animals")}
        >
          <Text style={styles.buttonText}>Back to Animals</Text>
        </TouchableOpacity>
      </View>

      {/* Grid of forest animals */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {Array.from({ length: 72 }).map((_, index) => {
          const f = forest[Math.floor(index / 2)];
          return (
            <View key={index} style={styles.gridItem}>
              {index % 2 === 0 && index % 24 < 12 && f ? (
                <TouchableOpacity onPress={() => handlePress(f.name)}>
                  <Image source={f.url} style={styles.icon} />
                  <Text style={styles.iconText}>{f.name}</Text>
                </TouchableOpacity>
              ) : index % 2 === 1 && index % 24 > 11 && f ? (
                <TouchableOpacity onPress={() => handlePress(f.name)}>
                  <Image source={f.url} style={styles.icon} />
                  <Text style={styles.iconText}>{f.name}</Text>
                </TouchableOpacity>
              ) : (
                <Image
                  source={{
                    uri: f?.name == "" ? f?.url || "" : "",
                  }}
                  style={styles.icon}
                />
              )}
            </View>
          );
        })}
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
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
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
    marginBottom: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 5,
    paddingTop: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    alignSelf: "center",
  },
  iconText: {
    fontSize: 12,
    color: "#333",
    alignSelf: "center",
  },
});

export default AnimalsScreen;
