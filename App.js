
import ModalProvider from "./src/contexts/modal";
import { MyTabs } from "./src/routes/route";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
   
      <ModalProvider>

      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </ModalProvider>

    
  );
}