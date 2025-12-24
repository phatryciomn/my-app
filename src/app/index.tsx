import { useState } from "react"
import {View, Text, StyleSheet} from "react-native"
import { router } from "expo-router"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

export default function Index() {
  const [name, setName] = useState("")

  function handleNext() {
    router.navigate("/home")
  }

  function onChangeText(text: string) {
    console.log(text)
    setName(text)
  }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>

            <Input onChangeText={setName} />

            <Button title= "Entrar" onPress={handleNext} activeOpacity={0.3} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontWeight: "bold",
    color: "green",
    fontSize: 30,
    marginLeft: 20,
  },
});
