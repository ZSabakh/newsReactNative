import React, { useContext } from "react";
import { Text, StyleSheet, Button, FlatList, SafeAreaView } from "react-native";
import { Context } from "../context/NewsContext";

function HomeScreen() {
  const { state, addNews } = useContext(Context);

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title="Add" onPress={() => addNews()} />
      <FlatList
        data={state}
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
