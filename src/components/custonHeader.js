import { View, Text,StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import {useFonts,Ubuntu_300Light} from '@expo-google-fonts/ubuntu'

export function CustonHeader(){

    const[fontLoaded] = useFonts({
        Ubuntu_300Light
    })
  

    return(
        <View style={styles.header}>
          <Text style={[styles.title]}>Minhas Contas</Text>
          <View style={styles.logos}>
          <Ionicons name="logo-facebook" color='grey' size={30} />
          <Ionicons name="logo-instagram" color='grey' size={30} />
          <Ionicons name="mail-outline" color='grey' size={35} />
          <Ionicons name="logo-linkedin" color='grey' size={30} />
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    header: {
      backgroundColor: "#121214",
      width: "100%",
      height: "20%",
      justifyContent: "center",
      alignItems: "center",
      gap: 15,
    },
    logos:{
        flexDirection: 'row',
        gap:30,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: "#e1e1e6",
        fontSize: 20,
        //fontFamily:'Ubuntu_300Light'
        
      },
  });
  