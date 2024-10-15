import { StyleSheet, Text, View,Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(website: string){
    Linking.openURL(website)
  }
 
  return (
    <View>
      <Text>ActionCard</Text>
      <TouchableOpacity onPress={()=>openWebsite("https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16")}>
        <Text> Clcik me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})