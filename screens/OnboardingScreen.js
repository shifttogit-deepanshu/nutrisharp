import React from "react"
import {View,StyleSheet,Image,Text} from "react-native"
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation})=>{
    return (
        <View style={styles.onboard}><Onboarding 
        onSkip={()=>navigation.replace("loginpage")}
        onDone={()=>navigation.navigate("loginpage")}
        pages={[
          {
              backgroundColor: '#A6E4D0',
              image: <Image style={styles.logo} source={require('../assets/images/ob1.png')} />,
              title: 'Through a Life cycle Based Intervention',
              subtitle: 'Reproductive Age Group (18-35 years)',
              titleStyles:{fontSize:20,fontWeight:'bold'},
              subTitleStyles:{fontSize:14,fontFamily:'Lato-Regular'}
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image style={styles.logo} source={require('../assets/images/ob2.png')} />,
                title: 'Nutrition',
                subtitle: 'Improving Nutrition focused Maternal New-born Child Health Practices Among Women',
                titleStyles:{fontSize:20,fontWeight:'bold'},
                subTitleStyles:{fontSize:14,fontFamily:'Lato-Regular'}
              },
            {
                backgroundColor: '#e9bcbe',
                image: <Image style={styles.logo} source={require('../assets/images/ob3.png')} />,
                title: 'Nutrition',
                subtitle: 'Improving Nutrition focused Maternal New-born Child Health Practices Among Women',
                titleStyles:{fontSize:20,fontWeight:'bold'},
                subTitleStyles:{fontSize:14,fontFamily:'Lato-Regular'}
              },
            {
              backgroundColor: 'white',
              image: <Image style={styles.logo} source={require('../assets/images/logo.png')} />,
              title: 'In Association',
              subtitle: 'School Health Annual Report Programme',
              titleStyles:{fontSize:20,fontWeight:'bold'},
              subTitleStyles:{fontSize:14,fontFamily:'Lato-Regular'}
            },
            
        ]}
      /></View>
        
    )
}

const styles = StyleSheet.create({
    logo:{
        width:180,
        height:180,
        resizeMode: 'stretch'
    },
    onboard:{
        flex:1,
        width:"100%",
        height:"100%"        
    }
})

export default OnboardingScreen