import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import Item from "./components/Item";
import Card from "./components/Card";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Presion Sexual",
    image:
      "https://www.teeth22.com/wp-content/uploads/2020/03/absceso-dental-800x399.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Educacion Sexual",
    image: "https://redclade.org/wp-content/uploads/UODAC-1.jpg",
  },
];

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar hidden={true} />
        </View>
          <Image
            style={styles.header}
            source={require("./assets/images/banner.jpg")}
          />
          <View style={styles.wrapperContent}>
            <Text style={styles.textHeader}>
              Respeta + Valorate +
              Conocete+Afirma+Expresa+Establece+Piensa+Valora+Decide+Acepta+
            </Text>
            <View style={styles.keywordsWrapper}>
              <Text style={styles.keywords}>Palabras Claves</Text>
              <Text style={styles.viewAll}>Ver todos</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Item text="salud sexual y Reproductiva" />
              <Item text="derechos" />
              <Item text="Equidad de genero" />
              <Item text="Habilidades Blandas" />
            </View>
            <View style={styles.keywordsWrapper}>
              <Text style={styles.keywords}>Temas</Text>
            </View>
          </View>
          <ScrollView horizontal={true} style={{ marginLeft: 15 }}>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    height: height * 0.2,
    width: width,
  },
  wrapperContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  textHeader: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#7879FF",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  keywordsWrapper: {
    marginTop: 25,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  keywords: {
    fontSize: 22,
    textTransform: "capitalize",
    color: "#000",
    fontWeight: "700",
  },
  viewAll: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#696969",
  },
  themes: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red",
  },
});

export default App;
