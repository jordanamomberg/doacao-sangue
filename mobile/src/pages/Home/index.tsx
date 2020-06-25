import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{ width: 460, height: 300 }}
      >
          <View style={styles.main}>
            <Image source={require("../../assets/logo.png")} style={styles.logo}/>
            <View>
              <Text style={styles.title}>
                <Text style={styles.textGray}>Doe</Text> Sangue
              </Text>
              <Text style={styles.title}>
                <Text style={styles.textGray}>Salve</Text> Vidas
              </Text>
              <Text style={styles.description}>
                Pra quem doa são alguns minutos, pra quem recebe é uma vida inteira.
                Ajudamos você encontrar pontos de coleta.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a UF"
              value={uf} onChangeText={setUf}
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite a Cidadde"
              value={city} onChangeText={setCity}
              autoCorrect={false}
            />
            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#FFF" size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "rgba(187,33,39, 0.08)",
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    width: 150,
    height: 70,
    resizeMode: "contain",
    marginBottom: 16,
  },

  title: {
    color: "#B61D23",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
  },

  textGray: {
    color: "#565656",
  },

  description: {
    color: "#565656",
    fontSize: 14,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 18,
  },

  footer: {},

  select: {},

  input: {
    height: 52,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#B61D23",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Home;
