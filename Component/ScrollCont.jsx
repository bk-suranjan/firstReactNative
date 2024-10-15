import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCont() {
  return (
    <View>
    <View>
      <Text style={styles.titles}>ScrollCont</Text>
    </View>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.innerCon}>
            <Text>Now</Text>
        </View>
        <View style={styles.innerCon}>
            <Text>you</Text>
        </View>
        <View style={styles.innerCon}>
            <Text>can</Text>
        </View>
        <View style={styles.innerCon}>
            <Text>scroll</Text>
        </View>
        <View style={styles.innerCon}>
            <Text>It</Text>
        </View>
        <View style={styles.innerCon}>
            <Text>☠️</Text>
        </View>
    </ScrollView>
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
         marginHorizontal:6,
    },
     innerCon:{
        height:150,
        width:180,
        backgroundColor:"pink",
        borderRadius:10,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:2,
        elevation:4,
        shadowOffset:{
           height:13,
           width:13,
        },
        shadowColor:"#000"

     }


})