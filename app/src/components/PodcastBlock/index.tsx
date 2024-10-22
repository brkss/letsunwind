import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const PodcastBlock: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 1,
          marginBottom: 30,
          marginTop: 30,
        }}
      />
      <View style={styles.info}>
        <Image
          source={{
            uri: "https://www.publishersweekly.com/cover/9780375810060",
          }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.podcastName}>PODCAST NAME</Text>
            <Text style={styles.podcastTitle}>
              What is Anxiety ? General Explication.
            </Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="play"
              size={15}
              style={{ marginRight: 5 }}
              color="white"
            />
            <Text style={styles.podcastTime}>21:03</Text>
          </View>
        </View>
      </View>
      <Text style={styles.podcastDescription}>What is culture ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 15,
  },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  titleContainer: {
    justifyContent: "space-between",
  },
  podcastName: {
    color: "white",
    opacity: 0.8,
    marginBottom: 3,
  },
  podcastTitle: {
    color: "white",
    fontWeight: "bold",
  },
  podcastTime: {
    color: "white",
  },
  podcastDescription: {
    color: "white",
    marginTop: 15,
  },
});
