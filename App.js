import HomeScreen from "./src/screens/HomeScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NewsProvider } from "./src/context/NewsContext";

const Stack = createStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NewsProvider>
  );
}

export default App;
