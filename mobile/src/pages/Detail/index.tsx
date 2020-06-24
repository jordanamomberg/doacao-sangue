import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, Linking, ScrollViewComponent } from "react-native";
import Constants from "expo-constants";
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';

interface Params { 
  point_id: number;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail = () => {
    const [data, setData] = useState<Data>({} as Data);

    const navigation = useNavigation();
    const route = useRoute();

    const routeParams =  route.params as Params;

    useEffect(() => {
      api.get(`points/${routeParams.point_id}`).then(response => {
        setData(response.data);
      })
    }, [])

    function handleNavigatoToBack() {
        navigation.goBack();
    }

    function handleWhatsapp() {
      Linking.openURL(`whatsapp://send?phone${data.point.whatsapp}&text=Tenho interesse na coleta de resíduos`);
    }

    function handleComposeMail() {
      MailComposer.composeAsync({
        subject: 'Interesse na coleta de resíduos',
        recipients: [data.point.email],
      })
    }

    if (!data.point) {
      return null;
    }

  return (
    <>
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigatoToBack}>
                <Icon name="arrow-left" color="#B61D23" size={20} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.pointName}>{data.point.name}</Text> 
              
              <Image style={styles.pointImage} source={{ uri: data.point.image_url }}/> 

              <View style={styles.requirements}>
                <ScrollView
                  scrollToOverflowEnabled
                >
                  <Text style={styles.needBlood}>O que você precisa saber antes de doar sangue</Text>
                  <View style={styles.descriptionBlood}>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />Estar alimentado. </Text>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />Evite alimentos gordurosos nas 3 horas que antecedem a doação de sangue.</Text>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />Caso seja após o almoço, aguardar 2 horas.</Text>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />Ter dormido pelo menos 6 horas nas últimas 24 horas.</Text>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.</Text>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />A frequência máxima é de quatro doações de sangue anuais para o homem e de três doações de sangue anuais para as mulher.</Text>
                    <Text style={styles.descriptionText}><Icon name="check" color="#B61D23" size={16} />O intervalo mínimo entre uma doação de sangue e outra é de dois meses para os homens e de três meses para as mulheres.</Text>
                  </View>
                </ScrollView>
              </View>
              
              <Text style={styles.needBloodTwo}>Necessidade maior nos tipos sanguíneos:</Text>
              <Text style={styles.pointItems}>
                {data.items.map(item => item.title).join(', ')}
              </Text>

              <View style={styles.address}>
                  <Text style={styles.addressTitle}>Endereço:</Text> 
                  <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
              </View>
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleWhatsapp}>
              <FontAwesome name="whatsapp" size={20} color="#FFF"/>
              <Text style={styles.buttonText}>Whatsapp</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleComposeMail}>
              <Icon name="mail" size={20} color="#FFF"/>
              <Text style={styles.buttonText}>Whatsapp</Text>
            </RectButton>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + Constants.statusBarHeight,
    backgroundColor: "#fff",
  },

  pointImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 24, 
  },

  requirements: {
    height: 240,
    width: 280,
  },

  needBlood: {
    color: "#CD444A",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginRight: 30,
  },

  needBloodTwo: {
    color: "#CD444A",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginTop: 24,
  },

  descriptionBlood: {
    fontFamily: "Roboto_400Regular",
    marginTop: 8,
    color: "#565656",
    marginRight: 30,
  },

  descriptionText: {
    marginBottom: 4,
  },

  pointName: {
    color: "#B61D23",
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 8,
  },

  pointItems: {
    fontFamily: "Roboto_400Regular",
    fontSize: 24,
    lineHeight: 24,
    marginTop: 8,
    color: "#565656",
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: "#CD444A",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  addressContent: {
    fontFamily: "Roboto_400Regular",
    lineHeight: 24,
    marginTop: 8,
    color: "#565656",
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(182,29,35,0.03)"
  },

  button: {
    width: "48%",
    backgroundColor: "#B61D23",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});

export default Detail;
