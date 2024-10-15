import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Story() {
    let data = [
        {
          uuid:1,
          name:"Add story",
          imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        },
        {
            uuid:2,
            name:"Angles Curtis",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
           
          },
          {
            uuid:3,
            name:"Alica jo",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
            
          },
          {
            uuid:4,
            name:"Alan waker",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
            },
          {
            uuid:5,
            name:"sher khan",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
          },
          {
            uuid:6,
            name:"Add story",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
           
          },
          {
            uuid:7,
            name:"Add story",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
            
          },
          {
            uuid:8,
            name:"Add story",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
          
          },
                      
    ]
  return (
    <ScrollView horizontal style={styles.container}>
      {
        data.map(({uuid,name,imgUrl})=>(
    
          
              <View key={uuid} style={styles.innerCon}>
           
            <Image source={{uri:imgUrl}} style={styles.img}/>
            <Text style={styles.names}>{name}</Text>
            </View>
    
  
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
    marginVertical:20,
  },
  innerCon:{ 
    flex:1,
    marginLeft:23,
    gap:3,
  },
  img:{
    height:60,
    width:60,
    borderRadius:60/2,
  },
  names:{
    color:"#000",
    fontWeight:"500",
  },
})