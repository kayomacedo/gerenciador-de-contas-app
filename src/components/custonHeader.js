import { View, Text,StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import {useFonts,Ubuntu_300Light} from '@expo-google-fonts/ubuntu'
import { useTheme } from "styled-components";
import { MyThemeContext } from "../contexts/theme";
import { useContext } from "react";



export function CustonHeader({titulo}){
  const {colors} =useTheme();
  const {themeAtual} = useContext(MyThemeContext)

   
  

    return(
        <View  animation ='fadeInDown' style={[styles.header,{backgroundColor:colors[themeAtual].header}]}>
          
          {titulo ==='Configurações' ?
          ( <>
          <View style={styles.boxConfig}>

          <Text style={[styles.title,{color:colors[themeAtual].headerIcon}]}>{titulo}</Text>
          <Ionicons name="settings-outline" color={colors[themeAtual].headerIcon} size={35} />
          </View>
          </>)
          :
          (<>
          
          <View style={styles.logos}>
            
            <Ionicons name="logo-facebook" color={colors[themeAtual].headerIcon} size={30} />
            <Ionicons name="logo-instagram" color={colors[themeAtual].headerIcon} size={30} />
            <Ionicons name="mail-outline" color={colors[themeAtual].headerIcon} size={35} />
            <Ionicons name="logo-linkedin" color={colors[themeAtual].headerIcon} size={30} />
            </View>
          </>
          )}
          
        </View>
    )
}


const styles = StyleSheet.create({
    
    header: {
      backgroundColor: "#121214",
      width: "100%",
      height:120,
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
       
        
      },
      boxConfig:{
        flexDirection:'row', 
        gap:15,
        justifyContent:'center'
      }
  });
  