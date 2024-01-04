
import { ThemeProvider } from "styled-components";
import { MyTabs } from "./src/routes/route";
import { NavigationContainer } from "@react-navigation/native";
import ModalProvider from "./src/contexts/modal";
import MyThemeProvider from "./src/contexts/theme";
import { custonTheme } from "./src/theme/myTheme";
import { useTheme } from "styled-components";
import { MyThemeContext } from "./src/contexts/theme";
import { useContext } from "react";

export default function App() {

  return (
   
      <ModalProvider>
      <MyThemeProvider>
      <ThemeProvider theme={custonTheme}>

      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </ThemeProvider>
      </MyThemeProvider>

      </ModalProvider>

    
  );
}