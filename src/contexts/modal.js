import React, { createContext, useEffect, useState } from "react";
export const ModalContext = createContext({});
import AsyncStorage from "@react-native-async-storage/async-storage";

function ModalProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [minhasContas, setMinhasContas] = useState([]);

  const chave = "@MydataThemes:dataThemes";


  const getContas = async () => {
    
    try {
      const value = await AsyncStorage.getItem(chave);
      if(!value){
        setMinhasContas(JSON.parse([]));  
      }
      setMinhasContas(JSON.parse(value));
    } catch (e) {
      // saving error
    }
    return [];
  };

  useEffect(() => {
    getContas();
  }, []);


  const salvarNovaConta = async (titulo,email,senha) => {
    try {
      const value = await AsyncStorage.getItem(chave);
      if (value == null) {
        AsyncStorage.setItem(chave, JSON.stringify([]));
      }
      const convertida = JSON.parse([value]);

      // Nova
      if (email != "" && email != "" && senha != "") {
        const newConta = {
          email: email,
          senha: senha,
          titulo: titulo,
          senhaVisivel:false
        };
        convertida.push(newConta);

        AsyncStorage.setItem(chave, JSON.stringify(convertida));
        setMinhasContas(convertida);
      }
    } catch (e) {}
  };

  const apagarConta = async (index) =>{
    const value = await AsyncStorage.getItem(chave);
    const convertida = JSON.parse([value]);
      // Verificar se o índice é válido
      if (index >= 0 && index < convertida.length) {
        // Remover o objeto no índice específico
        convertida.splice(index, 1);
        
    }
    AsyncStorage.setItem(chave, JSON.stringify(convertida));
    setMinhasContas(convertida);

  } 


  return (
    <ModalContext.Provider value={{ isVisible, minhasContas, salvarNovaConta,apagarConta }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
