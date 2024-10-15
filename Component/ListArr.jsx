import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ListArr() {

    let details = [
        {
            uud:1,
            name:"Ram",
            dep:"Computer science With BIT",
            roll:21,
            url:"https://img.freepik.com/premium-photo/indian-hindu-god-lord-ram-beautiful-image_545622-2536.jpg?w=1060",
        },
        {
            uuid:2,
            name:"shyam",
            dep:"Computer science With BIT",
            roll:322,
            url:"https://as1.ftcdn.net/v2/jpg/09/46/50/22/1000_F_946502279_tmeYm4vINGL3Uqwzxb8DAIYiJg2lNVIo.jpg",
        },
        {
            uuid:3,
            name:"Sita",
            dep:"Computer science With BIT",
            roll:322,
            url:"https://cdn.shopify.com/s/files/1/0815/1000/7089/files/mata_sita_480x480.jpg?v=1706621542",
        },
        {
            uuid:4,
            name:"Gita",
            dep:"Computer science With BIT",
            roll:322,
            url:"https://static.wixstatic.com/media/158daa_b9495458179d44419308685251291604~mv2.png/v1/fill/w_613,h_613,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/158daa_b9495458179d44419308685251291604~mv2.png",
        },
    
    ]
  return (
    <View>
        <Text style={styles.header}>Contact list</Text>
      <ScrollView scrollEnabled={false} >
      {details.map(({uuid,name,dep,roll,url})=>(
        <View key={uuid} style={styles.container}>
             <Image source={{uri:url}} style={styles.urlImg}/>
             <View>
             <Text style={styles.names}>{name}</Text>
             <Text style={styles.dep}>{dep}</Text>
             </View>
           
        </View>
      ))}

     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        margin:10,
        fontColor:"#000000",
        fontWeight:"700",
    },
    container:{
        marginHorizontal:10,
        marginVertical:3,
        padding:5,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#EC8305",
        borderRadius:10,

    },
    urlImg:{
        height:60,
        width:60,
        marginRight:10,
        borderRadius:60/2,
    },
    names:{
        fontSize:20,
        color:"#000",
        fontWeight:"600",


    },
})