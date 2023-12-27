import { View, Text,StyleSheet,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
export function CustonButonPlus({func}){
  

    return(
      <TouchableOpacity onPress={func}>
      <Ionicons style={[styles.btAdd]} name="add-circle-outline" size={60} />
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
  