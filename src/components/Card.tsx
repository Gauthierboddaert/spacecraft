import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  yolo: {
    name: string;
    model: string;
    cost_in_credits: number;
  };
}
const url = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";
const Card = ({ yolo }: Props) => {
  console.log();
  const { name, model, cost_in_credits } = yolo;
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Image source={require("../../assets/img1.jpeg")} style={styles.img} />
      <Text style={styles.model}>{model}</Text>
      <Text style={styles.credit}>{yolo.cost_in_credits} $</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#A9A9A9",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    minHeight: 300,
    borderRadius: 10,
  },
  name: {
    color: "black",
    fontSize: 30,
    padding: 5,
  },
  model: {
    padding: 3,
    color: "black",
  },
  credit: {
    color: "black",
    padding: 3,
  },
  img: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 1,
  },
});

export default Card;
