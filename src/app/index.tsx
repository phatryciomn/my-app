import {View, Text, StyleSheet, Alert,} from "react-native"

import { Button } from "../components/button"

export default function Index() {
  function handleMenssage() {
    const name = "Tião"
    console.log("sai cachorro")
    return Alert.alert(`ce ta doido ${name}`)
  }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>la ele mil vezes ce ta doido sai cachorro</Text>
            <Button/ >
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    color: "green",
    fontSize: 30,
    marginLeft: 20,
  },
});
