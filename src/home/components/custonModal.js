import { View, Text, StyleSheet, TouchableOpacity,Modal, Button, TouchableWithoutFeedback,TextInput,StatusBar } from "react-native";
import react,{useState} from "react";
import { Ionicons } from "@expo/vector-icons";

export function CustonModal({isVisible,close,save}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [titulo, setTitulo] = useState("");
   

    const handleSave = () => {
        // Chame a função save passando os valores do título, email e senha
        save(titulo, email, senha);
    
        // Limpe os campos após salvar
        setTitulo('');
        setEmail('');
        setSenha('');
    
        // Feche o modal
        //close();
      };
  return (
    <View>
      
   <StatusBar backgroundColor={'#121214'} barStyle="ligth-content"/>
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={close}
      >
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContent]}>
              <TouchableOpacity onPress={close}>
                <Ionicons
                  style={{ color: "#f75a68", textAlign: "right" }}
                  name="close-outline"
                  size={30}
                  />
              </TouchableOpacity>

              <Text style={{ color:'white' }}>Digite o Titulo:</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Titulo"
                placeholderTextColor={'grey'}
                onChangeText={(text) => setTitulo(text)}
                />

              <Text style={{ color:'white'}}>Digite o Email:</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor={'grey'}
                onChangeText={(text) => setEmail(text)}
                />

              <Text style={{color:'white'}}>Digite a Senha:</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Senha"
                placeholderTextColor={'grey'}
                onChangeText={(text) => setSenha(text)}
                secureTextEntry={true}
                autoCapitalize="none"
                />

              <TouchableOpacity
                style={styles.button}
                onPress={handleSave}

                >
                <Ionicons
                  style={[styles.btAdd]}
                  name="arrow-forward-outline"
                  size={30}
                  />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: "#202024",
      borderRadius: 10,
      elevation: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: "gray",
      marginBottom: 10,
      padding: 8,
      borderRadius: 5,
      color: "white",
    },
  
    btAdd: {
      color: "#00b37e",
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
    },
  });
