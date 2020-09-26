import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/NewsContext";
import { Foundation } from "@expo/vector-icons";

function HomeScreen() {
  const { state, addNews, deleteNews } = useContext(Context);

  return (
    <SafeAreaView>
      <Button title="Add" onPress={() => addNews()} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.postContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  deleteNews(item.id);
                }}
              >
                <Foundation style={styles.icon} name="page-delete" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    borderColor: "navy",
  },
  title: {
    fontSize: 20,
  },
  icon: {
    fontSize: 28,
  },
});

export default HomeScreen;
