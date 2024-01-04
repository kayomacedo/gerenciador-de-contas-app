import { StyleSheet,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { useTheme } from "styled-components";
import { MyThemeContext } from "../../contexts/theme";
import { useContext } from "react";



export function CustonButonPlus({func}){
  const {colors} =useTheme();
  const {themeAtual} = useContext(MyThemeContext)

  

    return(
      <TouchableOpacity onPress={func}>
      <Ionicons style={[styles.btAdd,{color:(colors[themeAtual].iconPlus ?? styles.btAdd.color)}]} name="add-circle-outline" size={60} />
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  
    btAdd: {
      color: "#00b37e",
      marginTop: 20,
      marginBottom: 20,
    }
  });
  