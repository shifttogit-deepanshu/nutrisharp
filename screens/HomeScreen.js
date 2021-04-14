import React from 'react'
import {View,StyleSheet,Text,Button} from 'react-native'

import { auth } from '../firebase/firebase'

const HomeScreen=()=> {

    const handleSignOut = ()=>{
        auth.signOut().then(() => {
            console.log('signed out')
          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="log out" onPress={()=>handleSignOut()}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})