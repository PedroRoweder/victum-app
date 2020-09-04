import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainMenu } from "./view/MainMenu";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={MainMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
