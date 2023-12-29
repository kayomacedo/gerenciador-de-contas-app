import { View, Text, StyleSheet, SafeAreaView,StatusBar,TouchableOpacity,Modal, ScrollView, Alert} from "react-native";
import { CustonHeader } from "../components/custonHeader";
import { Ionicons } from "@expo/vector-icons"; 
import { useEffect,useState, useContext} from "react";
import { CustonButonPlus } from "./components/custonButonPlus";
//import { CustonModal } from "./components/custonModal";
import {ModalContext}from "../contexts/modal";
import { CustonModal } from "./components/custonModal";
import EmailCard from "./components/ItemList";
import * as Clipboard from 'expo-clipboard';
import LottieView from "lottie-react-native";


export default function Home() {
  const {minhasContas,salvarNovaConta,apagarConta} = useContext(ModalContext);
  const [isVisible, setIsVisible] = useState(false);
  const [minhasContasemMemoria,setMinhasContasemMemoria] = useState([]);

  //salvarNovaConta(email='email.com',senha='senha123',titulo='titulo')

  
  useEffect(() => {
    setMinhasContasemMemoria(minhasContas);
    
  }, [minhasContas]); // Certifique-se de incluir o valor como dependência


  //alert(minhasContas)
  const abrirModal = () => {
    setIsVisible(!isVisible);
 
  };

const fecharModal = () => {
    setIsVisible(!isVisible);
  };

const salvarConta = (titulo,email,senha) => {
  salvarNovaConta(titulo=titulo ,email=email,senha=senha)
  setIsVisible(!isVisible); //
  };

const deletarConta = (chave) => {
    
    
    apagarConta(chave)
    };
  

const copiarEmail= async(email)=>{
  await Clipboard.setStringAsync(email);

}

function tornarSenhaVisivel(chave) {
  setMinhasContasemMemoria((prevState) => {
    const newState = [...prevState];
    newState[chave] = { ...newState[chave], senhaVisivel: !newState[chave].senhaVisivel };
    return newState;
  });
}


const renderRightActions = () => (
  <View style={styles.rightAction}>
    <Alert.AlertButton onPress={() => Alert.alert("Arrastou para a direita", "")}>
      Arrastar para a Direita
    </Alert.AlertButton>
  </View>
);


  

  return (
    <SafeAreaView style={{ flex: 1, marginBottom:45 }}>
         <StatusBar backgroundColor={'#121214'} barStyle="ligth-content" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CustonHeader 
        titulo='Minhas Contas'
        />
        <View style={styles.body}>
        <CustonButonPlus
        func={abrirModal}
        />
      
        <CustonModal
        isVisible={isVisible}
        close={fecharModal}
        save ={salvarConta}
        />    
        <ScrollView style={styles.scroll}>
        { minhasContasemMemoria && minhasContasemMemoria.length > 0 ?
        minhasContasemMemoria.map((data, index) => (
                
                <EmailCard
                  key={index}
                  email={data.email}
                  senha={data.senhaVisivel ? data.senha: '***'}
                  title={data.titulo}
                  chave={index}
                  deleteConta={deletarConta}
                  copy={copiarEmail}
                  senhaVisivel={tornarSenhaVisivel}
            
                  
                  
                />
                
              )):(
                <>

                <Text style={styles.title}>Não há contas armazenadas</Text>
                <View style={styles.boxLottie}>

                <LottieView
                autoPlay
                style={{
                  width: '100%',
                  height: 320,
           
                
                
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("../../src/assets/empy.json")}
              />
                </View>
                  
                  </>
              )
              
              }
     
        </ScrollView>
        
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
  scroll:{  
  width:'100%'
  },
  title:{
    width:'100%',
    color:'grey',
    textAlign:'center',
  },
  boxLottie:{
    marginTop:25,
    width:'100%',
    backgroundColor:'#00875f',
    justifyContent:'center',
    alignItems:'center',
  }
 
 
});
