import React from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"
import {windowHeight,windowWidth} from "../utils/Dimensions"

const FormButton = ({buttonTitle,...rest})=>{
    return(
    <TouchableOpacity {...rest} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:"100%",
        height:windowHeight/15,
        backgroundColor:"#2e64e5",
        alignItems:"center",
        justifyContent:'center',
        padding:10,
        borderRadius:30
    },
    buttonText:{
        color:'#ffffff',
        fontSize:18,
        fontFamily:"Lato-Regular",
        fontWeight:'bold'
    }
})
