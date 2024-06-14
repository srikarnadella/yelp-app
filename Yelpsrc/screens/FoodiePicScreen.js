import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
const FoodiePicScreen = (props) => {
  const id = props.navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // console.log(result)

  if (result === null) {
    return <Text>Please wait...</Text>;
  }
  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 200,
    aspectRatio: 16 / 9,
    borderRadius: 15,
    borderColor: "black",
    transform: [{ scale: 0.9 }],
    alignContent: "center",
  },
});

export default FoodiePicScreen;
