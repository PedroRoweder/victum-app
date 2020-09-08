import React from "react";
import { Provider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainMenu } from "./view/MainMenu";
import { MaintenancePage } from "./view/MaintenancePage";
import { VisualizePage } from "./view/VisualizePage";
import { VisualizeDetails } from "./view/VisualizeDetails";
import { ProductionPage } from "./view/ProductionPage";
import BarcodeReader from "./view/components/BarcodeReader";

export default function App() {
  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    dark: false,
  };
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={MainMenu} />
          <Stack.Screen name="production" component={ProductionPage} />
          <Stack.Screen name="maintence" component={MaintenancePage} />
          <Stack.Screen name="visualize" component={VisualizePage} />
          <Stack.Screen name="visualizeDetails" component={VisualizeDetails} />
          <Stack.Screen name="barcodeReader" component={BarcodeReader} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
