import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";
import FoodieList from "../components/FoodieList";
import FoodiePicScreen from "./FoodiePicScreen";
const FoodieScreen = ({ navigation }) => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState(" ");
  const FoodieApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "leesburg va",
        },
      });
      //console.log(response);
      console.log(response);
      setResults(response.data.businesses);
    } catch (err) {
      setErrMessage("Something went wrong");
    }
  };

  useEffect(() => {
    FoodieApi();
  }, []);
  const filterResultsByPrice = (dollars) => {
    return results.filter((result) => {
      return result.price === dollars;
    });
  };

  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => FoodieApi(term)}
      />
      {errMessage ? <Text style={styles.error}> {errMessage}</Text> : null}
      <Text> We have found {results.length} results</Text>
      <FoodieList
        title="Cheap ($)"
        restaurantList={filterResultsByPrice("$")}
      />
      <FoodieList
        title="Not as Cheap ($$)"
        restaurantList={filterResultsByPrice("$$")}
      />
      <FoodieList
        title="Take out a loan ($$$)"
        restaurantList={filterResultsByPrice("$$$")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FoodieScreen;
