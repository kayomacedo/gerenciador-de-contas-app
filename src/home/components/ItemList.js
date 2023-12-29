import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const EmailCard = ({ email, senha, title, deleteConta,chave,copy, senhaVisivel}) => {

    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    return (
    <View style={[styles.boxItem,{width:screenWidth/1.04}]}>
      <View style={styles.bts}>
        <TouchableOpacity onPress={()=>{copy(email)}}>
          <Ionicons style={{ color: '#00875f'}} name="copy-outline" size={30} />
        </TouchableOpacity>
        <Text style={{color:'white',fontWeight:'bold'}}>{title}</Text>
        <TouchableOpacity onPress={()=>{deleteConta(chave)}}>
          <Ionicons style={{ color:'#aa2834' }} name="trash-outline" size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.emailSenhaCard} onPress={()=>{
        senhaVisivel(chave)
      }}>
        <Text style={[styles.email]}>Email: {email}</Text>

        <View style={styles.boxSenha}>
          <Text style={[styles.senha]}>Senha: {senha}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boxItem: {
    

    backgroundColor: "#29292e",
    borderRadius: 10,
    padding: 25,
    gap: 5,
    marginBottom:15


  },
  email: {
    fontSize: 14,

    color:'#c4c4cc'
  },
  boxSenha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  senha: {
    fontSize:14,
    color: "#c4c4cc",

  },
  bts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -15,
  },
  emailSenhaCard: {
    padding: 8,
    borderRadius: 5,

  },
});

export default EmailCard;
