import React from "react"
import Navigator from "./navigation/Navigator"
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from "./store/store"

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Regular': require('./fonts/Lato-Regular.ttf'),
    'Kafum-SemiBoldItalic': require('./fonts/Kufam-SemiBoldItalic.ttf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return <Provider store={store}><Navigator /></Provider>
  }
}
