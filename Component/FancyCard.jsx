import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.container}>
  
      <Text style={styles.titles}>Tranding Place</Text>
  
    <View>
    <Image source={
       require("./Assests/html.jpg")    
    } style={styles.img}
        />
    </View>
    <View style={styles.contInner}>
        <Text style={styles.cardTitle}>Html 5</Text>
        <Text style={styles.cardLabe}>Use this for webPage</Text>
        <Text style={styles.cardDiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae dolore nemo voluptatum tempore facilis, quod rem id corrupti porro dolor libero non, atque repudiandae officia, voluptatem magnam ea odit.</Text>
        <Text style={styles.cardMore}>More about it</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    // backgroundColor:"pink",
    marginHorizontal:6,
    flex:1,
    flexGrow:1,
    alignItems:"center",
    justifyContent:"Center",
    elevation :1,
    shadowOffset:{
      width:1,
      height:1,
      
    },
    padding:20,
    marginBottom:30,

   },
    titles:{
        fontSize:25,
        fontWeight:"600",
        marginHorizontal:15,
    },
    img:{
        height:280,
        width:400,
        borderRadius:10,

      
    },
    contInner:{
      flex:1,
      justifyContent:"center",
    
    },
    cardTitle : {
      fontSize:20,
      marginHorizontal:6

    },
    cardLabe:{},
    cardDiscription:{
      width:290,
    },
    cardMore:{}
})