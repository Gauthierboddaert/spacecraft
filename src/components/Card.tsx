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
      <Image style={styles.img} source={{ uri: url }} />
      <Text>{model}</Text>
      <Text>{yolo.cost_in_credits}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    minHeight: 300,
  },
  name: {
    color: "black",
    fontSize: 30,
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
