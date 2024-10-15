import { Image, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

export default function Chat() {
    let data = [
       {
        uuid:1,
        name:"Kuch v",
        describe:"jdlfkls lkfjlsl lfdljl",
        imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
            
       },
        {
            uuid:2,
            name:"Angles Curtis",
            describe:"Please help me to find a good mo......",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },
          {
            uuid:3,
            name:"Alica jo",
            describe:"Please help me to find a good mo......",
             imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },
          {
            uuid:4,
            name:"Alan waker",
            describe:"Best composer and music producer ",
             imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },
          {
            uuid:5,
            name:"sher khan",
            describe:"King of the jungle . . .. . ",
             imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },
          {
            uuid:6,
            name:"Add story",
            describe:"Best composer and music producer ",

            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },

          {
            uuid:7,
            name:"Add story",
            describe:"Best composer and music producer ",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },
          {
            uuid:8,
            name:"Add story",
            describe:"Best composer and music producer ",
            imgUrl:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1480&t=st=1728890402~exp=1728891002~hmac=57f8b4bbd799c412e879b41bf3842cf6b8bf330db3f1cb3b56d1fa88975699ce",
        
          },
                      
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Charts</Text>
      <ScrollView>
        {
          data.map(({uuid,name,describe,imgUrl})=>(
            <View key={uuid} style={styles.innCont}>
            <Image source={{uri:imgUrl}} style={styles.img}/>

            <View>

              <View style={styles.NameBox}>
              <Text style={styles.name}>{name}</Text>
              <Text>02:11</Text>
              </View>

             <View style={styles.describe}>
              <Text style={styles.describe}>{describe}</Text>
              <Text> ....</Text>
              </View>

            </View>

            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor:"pink",
    height:650,
  },
  heading:{
    fontSize:20,
    fontWeight:"500",
    padding:10,
  },
  innCont:{
    flex:1,
    flexDirection:"row",
    marginVertical:10,
    padding:4,
  },
  img:{
    height:60,
    width:60,
    borderRadius:60/2,
    marginHorizontal:10,
  },
  NameBox:{
    flex:1,
    justifyContent:"space-between",
    flexDirection:"row",
    // backgroundColor:"yellow",
    width:310,
  },
  describe:{
    flex:1,
    justifyContent:"space-between",
    flexDirection:"row",
    // backgroundColor:"red",
  },
  name:{
    fontSize:17,
    fontWeight:"600",
    color:"#000",
  },
})