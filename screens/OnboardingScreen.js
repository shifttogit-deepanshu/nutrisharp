import React from "react"
import {View,StyleSheet,Image,Text} from "react-native"
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ()=>{
    return (
        <View style={styles.onboard}><Onboarding
        pages={[
          {
            backgroundColor: '#fdeb93',
            image: <Image style={styles.logo} source={require('../assets/images/ob1.png')} />,
            title: 'Nutrition',
            subtitle: 'Improving Nutrition focused Maternal New-born Child Health Practices Among Women',
          },
          {
              backgroundColor: '#A6E4D0',
              image: <Image style={styles.logo} source={require('../assets/images/ob2.png')} />,
              title: 'Through a Life cycle Based Intervention',
              subtitle: 'Reproductive Age Group (18-35 years)',
            },
            {
              backgroundColor: 'white',
              image: <Image style={styles.logo} source={require('../assets/images/logo.png')} />,
              title: 'In Association',
              subtitle: 'School Health Annual Report Programme',
            }
        ]}
      /></View>
        
    )
}

const styles = StyleSheet.create({
    logo:{
        width:150,
        height:150,
        resizeMode: 'stretch'
    },
    onboard:{
        flex:1,
        width:"100%",
        height:"100%"
    }
})

export default OnboardingScreen