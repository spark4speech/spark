import { useState } from "react";
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

const emotions = [
  {
    name: "Emotions",
    url: "https://cloud-68ucrctoz-hack-club-bot.vercel.app/0smiling-face-with-smiling-eyes_1f60a.png",
  },
  {
    name: "Happiness",
    url: "https://cloud-4ncyrflso-hack-club-bot.vercel.app/0image-17.png",
  },
  {
    name: "Sadness",
    url: "https://cloud-5qsbvedf6-hack-club-bot.vercel.app/0image-18.png",
  },
  {
    name: "Anger",
    url: "https://cloud-fwl5lt6w1-hack-club-bot.vercel.app/0image-19.png",
  },
  {
    name: "Fear",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Love",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Joy",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Surprise",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Disgust",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Anticipation",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Anxiety",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Frustration",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Excitement",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Shame",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Embarrassment",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Contentment",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Loneliness",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Jealousy",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Compassion",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Gratitude",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Hopelessness",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Relief",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Awe",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Confusion",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Curiosity",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Sleepy",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Sick",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Hurt",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Confused",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Sorrow",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Annoyed",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Hot",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Cold",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Hungry",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
  {
    name: "Silly",
    url: "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg",
  },
];

const EmotionsScreen = () => {
  const navigator = useNavigation<NavigationProp<TabParamList>>();

  const [sentence, setSentence] = useState("");

  const handlePress = (emotionName: string) => {
    setSentence((prev) => (prev ? `${prev} ${emotionName}` : emotionName));

    Speech.speak(emotionName);
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vocab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigator.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      {/* Grid of Emotions */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {Array.from({ length: 72 }).map((_, index) => {
          const emotion = emotions[Math.floor(index / 2)];
          return (
            <View key={index} style={styles.gridItem}>
              {index % 2 === 0 && index % 24 < 12 && emotion ? (
                <TouchableOpacity onPress={() => handlePress(emotion.name)}>
                  <Image source={{ uri: emotion.url }} style={styles.icon} />
                  <Text style={styles.iconText}>{emotion.name}</Text>
                </TouchableOpacity>
              ) : index % 2 === 1 && index % 24 > 11 && emotion ? (
                <TouchableOpacity onPress={() => handlePress(emotion.name)}>
                  <Image source={{ uri: emotion.url }} style={styles.icon} />
                  <Text style={styles.iconText}>{emotion.name}</Text>
                </TouchableOpacity>
              ) : (
                <Image
                  source={{
                    uri: emotion?.name == "" ? emotion?.url || "" : "",
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
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 5,
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

export default EmotionsScreen;
