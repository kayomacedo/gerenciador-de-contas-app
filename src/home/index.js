import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { CustonHeader } from "../components/custonHeader";
import { useEffect, useState, useContext } from "react";
import { CustonButonPlus } from "./components/custonButonPlus";
import { ModalContext } from "../contexts/modal";
import { CustonModal } from "./components/custonModal";
import EmailCard from "./components/ItemList";
import * as Clipboard from "expo-clipboard";
import LottieView from "lottie-react-native";
import { useTheme } from "styled-components";
import { MyThemeContext } from "../contexts/theme";
import * as Animatable from "react-native-animatable";
import { decryptText } from "../encript";





export default function Home() {
  const { minhasContas, salvarNovaConta, apagarConta } =
  useContext(ModalContext);
  const [isVisible, setIsVisible] = useState(false);
  const [minhasContasemMemoria, setMinhasContasemMemoria] = useState([]);
  const { colors } = useTheme();

  const { themeAtual } = useContext(MyThemeContext);

 


  useEffect(() => {
    setMinhasContasemMemoria(minhasContas);
  }, [minhasContas]); // Certifique-se de incluir o valor como dependência

  
  //alert(minhasContas)
  const abrirModal = () => {
    setIsVisible(!isVisible);
  };

  const fecharModal = () => {
    setIsVisible(!isVisible);
  };

  const salvarConta = (titulo, email, senha) => {
    salvarNovaConta((titulo = titulo), (email = email), (senha = senha));
    setIsVisible(!isVisible); //
  };

  const deletarConta = (chave) => {
    apagarConta(chave);
  };

  const copiarEmail = async (email) => {
    await Clipboard.setStringAsync(email);
  };

  function tornarSenhaVisivel(chave) {
    setMinhasContasemMemoria((prevState) => {
      const newState = [...prevState];
      newState[chave] = {
        ...newState[chave],
        senhaVisivel: !newState[chave].senhaVisivel,
      };
      return newState;
    });
  }
  
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor:
            colors[themeAtual].backgroundColor ??
            styles.safeArea.backgroundColor,
        },
      ]}
    >
      <StatusBar backgroundColor={"#121214"} barStyle="ligth-content" />
      <View style={styles.container}>
        <Animatable.View style={styles.headerBox} animation={"fadeInDown"}>
          <CustonHeader titulo="Minhas Contas" />
        </Animatable.View>

        <Animatable.View
          animation={"fadeInUp"}
          delay={600}
          style={[
            styles.body,
            {
              backgroundColor:
                colors[themeAtual]?.backgroundColor ??
                styles.body.backgroundColor,
            },
          ]}
        >
          <CustonButonPlus func={abrirModal} />

          <CustonModal
            isVisible={isVisible}
            close={fecharModal}
            save={salvarConta}
          />
          <ScrollView style={styles.scroll}>
            {minhasContasemMemoria && minhasContasemMemoria.length > 0 ? (
              minhasContasemMemoria.map((data, index) => (
                <EmailCard
                  key={index}
                  email={decryptText('salt',data.email)}
                  senha={data.senhaVisivel ? decryptText('salt',data.senha) : "***"}
                  title={decryptText('salt',data.titulo)}
                  chave={index}
                  deleteConta={deletarConta}
                  copy={copiarEmail}
                  senhaVisivel={tornarSenhaVisivel}
                />
              ))
            ) : (
              <>
                <Text
                  style={[
                    styles.title,
                    { color: colors[themeAtual].color ?? styles.title.color },
                  ]}
                >
                  Não há contas armazenadas
                </Text>
                <View
                  style={[
                    styles.boxLottie,
                    {
                      backgroundColor:
                        colors[themeAtual].lottieBackgroundColor ??
                        styles.boxLottie.backgroundColor,
                    },
                  ]}
                >
                  <LottieView
                    autoPlay
                    style={{
                      width: "100%",
                      height: 320,
                    }}
                    source={require("../../src/assets/empy.json")}
                  />
                </View>
              </>
            )}
          </ScrollView>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 45,
    backgroundColor: "#202024",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerBox: {
    width: "100%",
  },
  body: {
    flex: 1,
    backgroundColor: "#202024",
    width: "100%",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
  title: {
    width: "100%",
    color: "grey",
    textAlign: "center",
  },
  boxLottie: {
    marginTop: 25,
    width: "100%",
    backgroundColor: "#00875f",
    justifyContent: "center",
    alignItems: "center",
  },
});
