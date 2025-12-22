import {View, Text, StyleSheet} from "react-native"

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>la ele mil vezes ce ta doido sai cachorro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "black"
  },

  title: {
    fontWeight: "bold",
    color: "green",
    fontSize: 30,
    marginLeft: 20,
  },
});
