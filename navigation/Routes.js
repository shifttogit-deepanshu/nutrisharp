// import React,{useEffect,useState} from "react"
// import {auth} from "../firebase/firebase"

// import AuthStack from "./stackNavigators/AuthStack"
// import HomeScreen from "../screens/HomeScreen"

// const Routes = ()=>{
//     const [isLoggedIn,setIsLoggedIn] = useState(false)
//     useEffect(()=>{
//         const unsubscribe = auth.onAuthStateChanged((user)=>{
//           // if(user){
//           //   AsyncStorage.setItem('userToken',user.uid)
//           //   props.changeAuthState(user.uid)
//           // }
//           // else{
//           //   AsyncStorage.removeItem('userToken')
//           //   props.changeAuthState(null)
//           // }
//           props.changeAuthState(user.uid)
//         })
//         return unsubscribe
//       },[])


//     return <NavigationContainer>{isLoggedIn?<AuthStack />:<HomeScreen />}</NavigationContainer>
// }

// export default Routes

// import {connect} from "react-redux"
// import {changeAuthState} from "./store/actions/auth"

// const mapDispatchToProps = (dispatch)=>{
//   return {
//     changeAuthState : (uid)=>dispatch(changeAuthState(uid))
//   }
// }

// const mapStateToProps = (state)=>{
//   return {
//     uid : state.auth.uid
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)

import React,{useEffect,useState} from "react"
import AuthStack from "./stackNavigators/AuthStack"
import {auth} from "../firebase/firebase"
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "../screens/HomeScreen"
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
                  if(user){
                    // AsyncStorage.setItem('userToken',user.uid)
                    setIsLoggedIn(user.uid)
                    
                  }
                  else{
                    // AsyncStorage.removeItem('userToken')
                    setIsLoggedIn(null)
                    
                  }
        })
        return unsubscribe
        },[])
        // AsyncStorage.getItem('userToken').then(value=>setIsLoggedIn(value))
    return (
        <NavigationContainer>{isLoggedIn?<HomeScreen />:<AuthStack />}</NavigationContainer>
    )
}
