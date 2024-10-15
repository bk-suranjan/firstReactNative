import React from "react";
import 
{
  View,
  Text,
  SafeAreaView,
  ScrollViewBase,
  ScrollView,

} 
from "react-native"
import FlatCards from "./Component/FlatCards";
import ScrollCont from "./Component/ScrollCont";
import FancyCard from "./Component/FancyCard";
import Try from "./Component/Try"
import ActionCard from "./Component/ActionCard";
import Files from "./Component/Files";
import Whatsapp from "./Component/Whatsapp/Whatsapp";
 
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
         
          <>
           {/* <FlatCards />
          <ScrollCont />
          <FancyCard/>
          <Try/>

          <ActionCard />
          <Files /> */}
          <Whatsapp/>

          </>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
