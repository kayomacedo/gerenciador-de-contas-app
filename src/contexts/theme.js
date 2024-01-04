import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const MyThemeContext = createContext({});

function MyThemeProvider({ children }) {
  const chave = "@MyThemeAtual:AtualTheme";
  const [themeAtual, setThemeAtual] = useState("darkmode");

  const getThemeAtual = async () => {
    try {
      const value = await AsyncStorage.getItem(chave);
      if (value === null) {
        await AsyncStorage.setItem(chave, "darkmode");
        setThemeAtual("darkmode");
      } else {
        setThemeAtual(value);
      }
    } catch (error) {
      // Lidar com o erro, se necessário
      console.error("Erro ao obter o tema atual:", error);
    }
  };

  useEffect(() => {
    let getTheme = async () => {
      try {
        await getThemeAtual();
      } catch (error) {
        console.error("Erro ao carregar o tema:", error);
      }
    };
    getTheme();
  }, []);

  async function changeThemeAtual() {
    setThemeAtual((prevTheme) => {
      const newTheme = prevTheme === "darkmode" ? "lightmode" : "darkmode";
      AsyncStorage.setItem(chave, newTheme);
      return newTheme;
    });
  }

  async function carregarTema() {
    AsyncStorage.setItem(chave, themeAtual);
  }

  return (
    <MyThemeContext.Provider
      value={{ themeAtual, changeThemeAtual, carregarTema }}
    >
      {children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeProvider;
