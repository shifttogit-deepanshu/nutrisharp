import React from "react"
import { Provider } from 'react-redux'
import store from './store/store'
import Navigator from "./navigation/Navigator"

export default App = ()=>{
  return (<Provider store={store}><Navigator /></Provider>)
}