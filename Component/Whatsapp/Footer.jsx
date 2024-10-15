import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Footer() {
    function onPressHandler(website){
        Linking.openURL(website);
    }
  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri:"https://icons.veryicon.com/png/o/commerce-shopping/poly-budget-icon-library/home-202.png"}} style={styles.img}/>
        <TouchableOpacity style={[styles.button]} onPress={()=>onPressHandler("https://web.whatsapp.com/")}>
            <Image source={require("./Assests/pluss.jpg")} style={styles.imgs}/>
            <Text style={styles.color}>New Chart</Text>
        </TouchableOpacity>
       <Image source={require("./Assests/user.jpg")} style={styles.img}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        height:33,
        width:33,
    },
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        // backgroundColor:"pink",
        alignItems:"center",
        height:90,
        position:"relative",
        bottom:-0,
    },
    button:{
        backgroundColor:"#000",
         padding:13,
        height:43,
        borderRadius:20,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    color:{
        color:"#fff",
        fontSize:18,
        marginRight:5,
        height:25,
    },
    imgs:{
        height:20,
        width:25,
        marginRight:4,
    }
})