import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";

import Card from "../components/Card";
import { useStarships } from "../hooks/useStarships";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

const renderItem = (props: any) => {
  return <Card yolo={props.item} />;
};

const FeedScreen = () => {
  const navigationRef = useNavigationContainerRef();

  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.marketPlace}>MarketPlace 🛸 </Text>
      <FlatList data={data.results} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  marketPlace: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    color: "black",

    borderRadius: 10,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    minHeight: 300,
  },
});

export default FeedScreen;
