import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { CustonHeader } from "../components/custonHeader";
import { Ionicons } from "@expo/vector-icons";

export default function Config() {
  return (
    <View style={styles.container}>
      <CustonHeader titulo="Configurações" />
      <View style={styles.body}>
        <View style={styles.bloco}>
          <Text style={styles.title}>Mudar Tema:</Text>
          <TouchableOpacity onPress={()=>{alert('mudou de tema')}}>

          <Ionicons name="moon-outline" color="#00b37e" size={50} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Dark Mode</Text>
        </View>
        <Text style={styles.version}>Versão : 1.0.2</Text>
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
