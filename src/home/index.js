import { View, Text, StyleSheet, SafeAreaView,StatusBar,TouchableOpacity,Modal} from "react-native";
import { CustonHeader } from "../components/custonHeader";
import { Ionicons } from "@expo/vector-icons"; 
import { useEffect,useState, useContext} from "react";
import { CustonButonPlus } from "./components/custonButonPlus";
//import { CustonModal } from "./components/custonModal";
import {ModalContext}from "../contexts/modal";
import { CustonModal } from "./components/custonModal";
import EmailCard from "./components/ItemList";


export default function Home() {
  const {minhasContas,salvarNovaConta} = useContext(ModalContext);
  const [isVisible, setIsVisible] = useState(false);

  //salvarNovaConta(email='email.com',senha='senha123',titulo='titulo')

  //alert(minhasContas)
  const abrirModal = () => {
    setIsVisible(!isVisible);
  };

const fecharModal = () => {
    setIsVisible(!isVisible);
  };

const salvarConta = (titulo,email,senha) => {
  salvarNovaConta(titulo=titulo ,email=email,senha=senha)
 
    

  };
  
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
         <StatusBar backgroundColor={'#121214'} barStyle="ligth-content" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CustonHeader />
        <View style={styles.body}>
        <CustonButonPlus
        func={abrirModal}
        />
      
        <CustonModal
        isVisible={isVisible}
        close={fecharModal}
        save ={salvarConta}
        />    
        { minhasContas.map((data, index) => (
                
                <EmailCard
                  key={index}
                  email={data.email}
                  senha={data.senha}
                  title={data.titulo}
                  
                  
                />
                
              ))
              
              }
     
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#202024",
    width:'100%',
    alignItems:'center',

   
  },
 
});
