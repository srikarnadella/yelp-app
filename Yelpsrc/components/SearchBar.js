import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="md-search-sharp" size={50} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect="false"
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  backgroundStyle: {
    marginTop: 5, //moves the search bar down from the title
    backgroundColor: "grey", //grey color
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15, //moves the text over
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
  inputStyle: {
    fontSize: 18,
    color: "white",
    borderColor: "black",
    borderWidth: 3,
    flex: 1,
  },
});

export default SearchBar;
