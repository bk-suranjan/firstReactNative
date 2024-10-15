import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import Story from './Story'
import React from 'react'
import Chat from './Chat'
import Footer from './Footer'

export default function Whatsapp() {
  return (
    <SafeAreaView>
        <View style={styles.nav}>
            <Text style={styles.navText}>Socio</Text>
            <Image source={require("./Assests/search.jpg")} style={styles.navImg}/>
        </View>
        <Story/>
        <Chat/>
        <Footer/>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
    nav:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:15,
        alignItems:"center",
    },
    navText:{
        fontSize:23,
        color:"#000",
        fontWeight:"590",
    },
    navImg:{
        height:50,
        width:50,
        
    },
})