import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  StatusBar,
} from "react-native";
import { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { MyThemeContext } from "../../contexts/theme";


export function CustonModal({ isVisible, close, save }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [titulo, setTitulo] = useState("");

  const { colors } = useTheme();
  const { themeAtual } = useContext(MyThemeContext);

  const handleSave = () => {
    save(titulo, email, senha);

    setTitulo("");
    setEmail("");
    setSenha("");


  };
  return (
    <View>
      <StatusBar
        backgroundColor={colors[themeAtual].header ?? "#121214"}
        barStyle="ligth-content"
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={close}
      >
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.modalContent,
                  {
                    backgroundColor:
                      colors[themeAtual].modalBackgroundColor ??
                      styles.modalContent.backgroundColor,
                  },
                ]}
              >
                <TouchableOpacity onPress={close}>
                  <Ionicons
                    style={{
                      color: colors[themeAtual].modalIconClose ?? "#f75a68",
                      textAlign: "right",
                    }}
                    name="close-outline"
                    size={30}
                  />
                </TouchableOpacity>

                <Text
                  style={{ color: colors[themeAtual].modalTitle ?? "white" }}
                >
                  Digite o Titulo:
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        colors[themeAtual].modalPlaceholderBorder ??
                        styles.input.borderColor,
                    },
                  ]}
                  placeholder="Ex: Outlook"
                  placeholderTextColor={
                    colors[themeAtual].modalPlaceholder ?? "grey"
                  }
                  color={colors[themeAtual].modalPlaceholdercolor ?? "#e1e1e6"}
                  onChangeText={(text) => setTitulo(text)}
                />

                <Text
                  style={{ color: colors[themeAtual].modalTitle ?? "white" }}
                >
                  Digite a Conta:
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        colors[themeAtual].modalPlaceholderBorder ??
                        styles.input.borderColor,
                    },
                  ]}
                  placeholder="Email ou Username"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholderTextColor={
                    colors[themeAtual].modalPlaceholder ?? "grey"
                  }
                  color={colors[themeAtual].modalPlaceholdercolor ?? "#e1e1e6"}
                  onChangeText={(text) => setEmail(text)}
                />

                <Text
                  style={{ color: colors[themeAtual].modalTitle ?? "white" }}
                >
                  Digite a Senha:
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    { borderColor: colors[themeAtual].modalPlaceholderBorder },
                  ]}
                  placeholder="Senha"
                  placeholderTextColor={
                    colors[themeAtual].modalPlaceholder ?? "grey"
                  }
                  color={colors[themeAtual].modalPlaceholdercolor ?? "#e1e1e6"}
                  onChangeText={(text) => setSenha(text)}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                  <Ionicons
                    style={[
                      styles.btAdd,
                      { color: colors[themeAtual].modalIconSend ?? "#00b37e" },
                    ]}
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
