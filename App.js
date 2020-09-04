import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainMenu } from "./view/MainMenu";
import { MaintencePage } from "./view/MaintencePage";
import { VisualizePage } from "./view/VisualizePage";
import { ProductionPage } from "./view/ProductionPage";

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
          <Stack.Screen name="production" component={ProductionPage} />
          <Stack.Screen name="maintence" component={MaintencePage} />
          <Stack.Screen name="visualize" component={VisualizePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
