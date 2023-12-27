import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Config from '../config';


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Splash"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        backgroundColor: "#121214",
        borderTopWidth: 0,
      },
    }}
    
    
    
    
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({ color, size, focused }) => {
          if (focused) {
            return (
              <Ionicons
              name="mail-outline"
              color={"#00875f"}
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
              color={"#00875f"}
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
  );
}

