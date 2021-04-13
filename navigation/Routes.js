import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./stackNavigators/AuthStack"

const Routes = ()=>{
    return <NavigationContainer><AuthStack /></NavigationContainer>
}

export default Routes