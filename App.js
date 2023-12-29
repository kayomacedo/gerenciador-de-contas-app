
import ModalProvider from "./src/contexts/modal";
import ThemeProvider from "./src/contexts/theme";
import { MyTabs } from "./src/routes/route";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
   
      <ModalProvider>
      <ThemeProvider>

      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </ThemeProvider>

      </ModalProvider>

    
  );
}