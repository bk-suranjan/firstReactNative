import {
     StyleSheet,
      Text, 
      View
     } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.titles}>Flat Cards</Text>
      <View style={styles.container}>
        <Text style={[styles.cards,styles.cardOne]}>Red</Text>
        <Text style={[styles.cards,styles.cardTwo]}>Green</Text>
        <Text style={[styles.cards,styles.cardThree]}>Blue</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    titles:{
        fontSize:25,
        fontWeight:"600",
        marginHorizontal:15,
       

    },
    container : {
       flex:1,
       flexDirection:"row",
       margin:"auto"
    },
    cards :{
        textAlign:"center",
        textAlignVertical:"center",        
        height :100,
        width:100,
        borderRadius:10,
        margin:10,
    },
    cardOne : {
       backgroundColor:"#ef5354"
    },
    cardTwo : {
        backgroundColor:"#50dbb4"
     },
     cardThree : {
        backgroundColor:"#5da3fa"
     }

})