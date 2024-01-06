import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToastInsert } from "../components/toastMessagens";
import { encriptText } from "../encript";

export const ModalContext = createContext({});

function ModalProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [minhasContas, setMinhasContas] = useState([]);
  const chave = "@MydataThemes:dataThemes";

  const getContas = async () => {
    try {
      const value = await AsyncStorage.getItem(chave);
      if (!value) {
        setMinhasContas([]);
      } else {
        setMinhasContas(JSON.parse(value));
      }
    } catch (e) {
      // lidar com o erro
    }
  };

  useEffect(() => {
    getContas();
  }, []);

  const salvarNovaConta = async (titulo, email, senha) => {
    try {
      let convertida = await AsyncStorage.getItem(chave);
      if (convertida === null) {
        convertida = [];
      } else {
        convertida = JSON.parse(convertida);
      }

      if (email !== "" && senha !== "") {

        const emailCript = encriptText('salt', email)
        const senhaCript = encriptText('salt', senha)
        const tituloCript = encriptText('salt', titulo); //
        
        
        const newConta = {
          email: emailCript,
          senha: senhaCript,
          titulo: tituloCript,
          senhaVisivel: false,
        };
        convertida.push(newConta);

        AsyncStorage.setItem(chave, JSON.stringify(convertida));
        setMinhasContas(convertida);
        showToastInsert();
      }
    } catch (e) {
      // lidar com o erro
    }
  };

  const apagarConta = async (index) => {
    try {
      const value = await AsyncStorage.getItem(chave);
      let convertida = JSON.parse(value) || [];

      // Verificar se o índice é válido
      if (index >= 0 && index < convertida.length) {
        // Remover o objeto no índice específico
        convertida.splice(index, 1);
        AsyncStorage.setItem(chave, JSON.stringify(convertida));
        setMinhasContas(convertida);
      }
    } catch (e) {
      // lidar com o erro
    }
  };

  return (
    <ModalContext.Provider
      value={{ isVisible, minhasContas, salvarNovaConta, apagarConta }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
