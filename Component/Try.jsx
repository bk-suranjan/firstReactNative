import React from "react";
import{
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image
} from "react-native"

function Try () {
    return(
        <SafeAreaView>
            <ScrollView>
            <View>
                <Text style={styles.title}>Hello</Text>
            </View>
                  
            <ScrollView horizontal style={styles.scrollCont}>
                <View style={[styles.box,styles.red]}>
                <Text>Red</Text>
                </View>

                <View style={[styles.box,styles.green]}>
                <Text>Green</Text>
                </View>

                <View style={[styles.box,styles.blue]}>
                <Text>Blue</Text>
                </View>
            </ScrollView>

            <View style={styles.heroSection}>
                <Text style={styles.heroText}>Hello</Text>
                 <Image source={
                    require("./Assests/html.jpg")
                 }  style={styles.heroImg} ></Image>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        marginTop:10,
        width:150,
        fontSize:23,
        borderRadius:10,
        backgroundColor:"pink",
        color:"#000",
        marginLeft:150,
    },
    scrollCont : {
      marginTop:10,
     
    },

    box:{
        height:100,
        width:300,
        borderRadius:20,
        marginRight:10,
        Flex:1,
        justifyContent:"center",
        alignItems:"center",
    
    },
    red:{
       backgroundColor:"red"
    },
    green:{
        backgroundColor:"green"
    },
    blue:{
        backgroundColor:"blue"
    },

    heroSection:{
        height:430,
        width:380,
        
        borderRadius:10,

        marginTop:10,
        marginBottom:20,
        marginLeft:17,
       
        fleX:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"#000",
        

    },
    heroText:{
        fontSize:25,
        color:"red",
    },
    heroImg:{
        height:150,
        width:250,
        borderRadius:10,
        
    },
})

export default Try