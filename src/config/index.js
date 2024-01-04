import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { CustonHeader } from "../components/custonHeader";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import { MyThemeContext } from "../contexts/theme";
import { useContext } from "react";


export default function Config() {
  const {colors} =useTheme();
  const {themeAtual,changeThemeAtual} = useContext(MyThemeContext)
  
  function mudarTema(){
    changeThemeAtual()
  }
 
  return (
    <View style={[styles.container,{backgroundColor:(colors[themeAtual].backgroundColor ?? styles.container.backgroundColor)  }]}>
      <CustonHeader titulo="Configurações" />
      <View style={styles.body}>
        <View style={styles.bloco}>
          <Text style={[styles.title,{color:(colors[themeAtual].titleSecondary ?? styles.title.color)}]}>Mudar Tema:</Text>
          <TouchableOpacity onPress={mudarTema}>

          <Ionicons name={(colors[themeAtual].icon ?? 'moon-outline')} color={(colors[themeAtual].settingsIcon ?? '#00b37e')} size={50} />
          </TouchableOpacity>
          <Text style={[styles.subtitle,{color:(colors[themeAtual].titleSecondary ?? styles.subtitle.color)}]}>{colors[themeAtual].title}</Text>
        </View>
        <Text style={[styles.version,{color:(colors[themeAtual].titleSecondary ?? styles.version.color)}]}>Versão : 1.0.2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202024",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    width: "100%",
  },
  bloco:{
    marginTop:20,
    
    alignItems: "center",
    width:'100%',
    gap:20,
    flex:1/1.1
  },
  title:{
    color:'grey',
    fontSize:20
  },
  subtitle:{
    color:'grey',
    fontSize:18

  },
  version:{
    color:'grey',
    width:'100%',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
   
  }
});
