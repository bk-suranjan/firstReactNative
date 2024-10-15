import
 { Image,
   StyleSheet,
    Text,
     View,
     Button,
      Linking,
       TouchableOpacity,
       ScrollView
       }
  from 'react-native'

import React from 'react'
import ListArr from './ListArr';

export default function Files() {
  function handleOnPress(website:string) {
    Linking.openURL(website); 
  }
  return (
    <View>

    <Text style={styles.header}>Blog Card</Text>
    <View style={styles.container}>
        <View style={styles.innHeaderCon}>
          <Text  style={styles.innHeader}>What's new in Javascript 21-ES12</Text>
        </View>
        <View style={styles.imgCon}>

          <Image source={
            require("./Assests/brain.png")
          }  style={styles.img}/>
        </View>
        <View style={styles.innTextCon}>
          <Text maxHeight={50} style={styles.innText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, possimus exercitationem! Tempore porro ducimus quidem laudantium voluptas nam neque rerum ab vel, quo quae repellendus voluptates quaerat fugiat nobis eveniet.
          </Text>
        </View>

        <View style={styles.btnCon}>
          <TouchableOpacity  onPress={()=>handleOnPress("https://www.google.com/search?sca_esv=a4a60f4cb81ff8e0&rlz=1C1YTUH_enIN1023IN1023&sxsrf=ADLYWIIZOD_JJd1_jINRpFADtAdRWdD6gg:1728660653145&q=code+picture&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J6KdQ648qYsvb5sa7ZQin8EVjhCU-0TO-IkBNk6EOy2jo6YcFfox8kw611ojpC8T2hElUoYWXTiLO_gmBJZAKEwdb9wkBFjsE6kPt2dkfvOyprMbTA&sa=X&ved=2ahUKEwjp1Kvh0oaJAxVvoWMGHYF2KZEQtKgLegQIFRAB&biw=1463&bih=827&dpr=1.75#imgrc=sM9NtgcAwT06RM&imgdii=p26lqL3UTfjz6M")}>
            <Text style={styles.btnClr}>Read more</Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.btnClr} onPress={()=>handleOnPress("https://www.google.com/search?sca_esv=a4a60f4cb81ff8e0&rlz=1C1YTUH_enIN1023IN1023&sxsrf=ADLYWIIZOD_JJd1_jINRpFADtAdRWdD6gg:1728660653145&q=code+picture&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J6KdQ648qYsvb5sa7ZQin8EVjhCU-0TO-IkBNk6EOy2jo6YcFfox8kw611ojpC8T2hElUoYWXTiLO_gmBJZAKEwdb9wkBFjsE6kPt2dkfvOyprMbTA&sa=X&ved=2ahUKEwjp1Kvh0oaJAxVvoWMGHYF2KZEQtKgLegQIFRAB&biw=1463&bih=827&dpr=1.75#imgrc=sM9NtgcAwT06RM&imgdii=p26lqL3UTfjz6M")}
          >
            <Text>Read more</Text>
          </TouchableOpacity>
        </View>
    </View>
      
      <ScrollView horizontal scrollEnable >
    
        <View>
          <Image source={require("./Assests/brain.png")} style={styles.scrollImg} ></Image>
        </View>
        <View>
          <Image source={require("./Assests/html.jpg")} style={styles.scrollImg} ></Image>
        </View>
        <View>
          <Image source={require("./Assests/animal.webp")} style={styles.scrollImg} ></Image>
        </View>
     
      </ScrollView>

      <ListArr />

    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    fontSize:20,
    fontWeight:"600",
    marginHorizontal:10,
  },
  container:{
    height:430,
    backgroundColor:"#EC8305",
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:8,
    elevation:2,

  },
  img:{
    height:250,
    width:392,
  },
  innHeaderCon:{
    marginVertical:10,
    marginHorizontal:30,
  },
  innHeader:{
    fontSize:18,
    fontWeight:"700",
  },
  innTextCon:{
    marginHorizontal:15,
    marginVertical:10,
  },
  innText:{
    fontSize:14,
  },
  btnCon:{
    height:50,
    // backgroundColor:"red",
    marginHorizontal:10,
    marginVertical:8,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",

  },
  btnClr:{
    backgroundColor:"#DBD3D3",
    color:"#000",
    padding:8,
   borderRadius:5,
  },
  scrollImg:{
    height:250,
    width:300,
    margin:8,
    borderRadius:10,
    flex:1,
    elevation:2,
  }
 
})