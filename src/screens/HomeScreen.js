import React, { useContext } from "react";
import { Text, StyleSheet, Button, FlatList, SafeAreaView } from "react-native";
import NewsContext from "../context/NewsContext";

function HomeScreen() {
  const { data, addNews } = useContext(NewsContext);

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title="Add" onPress={() => addNews()} />
      <FlatList
        data={data}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
