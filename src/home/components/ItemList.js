import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { MyThemeContext } from "../../contexts/theme";
import { showToastDelete } from "../../components/toastMessagens";

const EmailCard = ({
  email,
  senha,
  title,
  deleteConta,
  chave,
  copy,
  senhaVisivel,
}) => {
  const { colors } = useTheme();
  const { themeAtual } = useContext(MyThemeContext);

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  const showDeleteConfirmation = (title) => {
    Alert.alert("Confirmar", `Excluir ${title}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => {
          deleteConta(chave);
          showToastDelete();
        },
      },
    ]);
  };

  return (
    <View
      style={[
        styles.boxItem,
        { width: screenWidth / 1.04, backgroundColor: colors[themeAtual].card },
      ]}
    >
      <View style={styles.bts}>
        <TouchableOpacity onPress={() => copy(email)}>
          <Ionicons
            style={{ color: colors[themeAtual].iconCopy ?? "#00b37e" }}
            name="copy-outline"
            size={30}
          />
        </TouchableOpacity>
        <Text
          style={{ color: colors[themeAtual].tituloCard, fontWeight: "bold" }}
        >
          {title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            showDeleteConfirmation(title);
          }}
        >
          <Ionicons
            style={{ color: colors[themeAtual].iconTrash ?? "#aa2834" }}
            name="trash-outline"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.emailSenhaCard}
        onPress={() => senhaVisivel(chave)}
      >
        <Text
          style={[
            styles.email,
            { color: colors[themeAtual].fontCard ?? styles.email.color },
          ]}
        >
          Conta: {email}
        </Text>
        <View style={styles.boxSenha}>
          <Text
            style={[
              styles.senha,
              { color: colors[themeAtual].fontCard ?? styles.senha.color },
            ]}
          >
            Senha: {senha}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boxItem: {
    backgroundColor: "#29292e",
    borderRadius: 10,
    padding: 25,
    gap: 5,
    marginBottom: 15,
    marginLeft: "1.8%",
  },
  email: {
    fontSize: 14,
    color: "#c4c4cc",
  },
  boxSenha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  senha: {
    fontSize: 14,
    color: "#c4c4cc",
  },
  bts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -15,
  },
  emailSenhaCard: {
    padding: 8,
    borderRadius: 5,
  },
});

export default EmailCard;
