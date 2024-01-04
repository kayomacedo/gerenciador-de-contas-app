import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Config from '../config';
import ModalProvider from "../contexts/modal";
import MyThemeProvider, { MyThemeContext } from "../contexts/theme";
import { ThemeProvider } from 'styled-components';
import { custonTheme } from '../theme/myTheme';
import { useTheme } from "styled-components";
import { useEffect,useState, useContext} from "react";


const Tab = createBottomTabNavigator();


export function MyTabs() {
  
  const {themeAtual} = useContext(MyThemeContext)

  const [statusThemeAtual, setStatusThemeAtual]= useState('darkmode');




    
  useEffect(() => {

  }, [themeAtual]);  // Certifique-se de incluir o valor como dependência

  const {colors} =useTheme();

  

  return (
    <>
     <ModalProvider>
     <MyThemeProvider>
     <ThemeProvider theme={custonTheme}>
      
    <Tab.Navigator
  
    initialRouteName="Splash"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",      
        borderTopWidth: 0,
        backgroundColor: colors[statusThemeAtual].header
      },
    }}
    
    
    
    
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
       
        tabBarIcon: ({ color, size, focused }) => {
          
            

          if (focused) {
          
          const {themeAtual} = useContext(MyThemeContext)
           setStatusThemeAtual(themeAtual)
          
          
            return (
              <Ionicons
              name="mail-outline"
              color={(colors[statusThemeAtual].iconTab ?? '#00b37e')}
              size={size + 10}
              />
              );
            }
            return (
              <Ionicons name="mail-outline" color={color} size={size + 10} />
              );
            },
            
            headerShown: false,
          }}
      
      />
      <Tab.Screen 
      name="Settings" 
      component={Config} 
      options={{
        tabBarIcon: ({ color, size, focused }) => {
          if (focused) {
            return (
              <Ionicons
              name="settings-outline"
              color={(colors[statusThemeAtual].iconTab ?? '#00b37e')}
              size={size + 10}
              />
              );
            }
            
            return (
              <Ionicons name="settings-outline" color={color} size={size + 10} />
              );
            },
            
            headerShown: false,
          }}
      
      
      />
    </Tab.Navigator>
    </ThemeProvider>
    </MyThemeProvider>
    </ModalProvider>
    </>
  );
}

