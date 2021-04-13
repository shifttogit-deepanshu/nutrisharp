import React from "react"
import Provider from "./navigation/Navigator"
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Regular': require('./fonts/Lato-Regular.ttf'),
    'Kafum-SemiBoldItalic': require('./fonts/Kufam-SemiBoldItalic.ttf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return <Provider />
  }
}
