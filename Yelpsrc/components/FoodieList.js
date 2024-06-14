import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import FoodiePicScreen from "../screens/FoodiePicScreen";

const FoodieList = ({ title, restaurantList, navigation, props }) => {
  console.log("list of food" + restaurantList);
  let monk = "    ";
  let altmonk = "      ";
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={restaurantList}
        horizontal
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.label}>
                {monk}
                {item.name}
              </Text>
              <Text style={styles.subText}>
                {altmonk}Rating: {item.rating}, # of Reviews:{" "}
                {item.review_count}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("FoodiePicScreen", {
                    navigation: navigation,
                    id: item.id,
                  })
                }
              >
                <View style={styles.button}>
                  <Image
                    style={styles.Image}
                    source={{ url: item.image_url }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12.5,
    fontStyle: "italic",
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  Image: {
    height: 150,
    width: 150,
    aspectRatio: 16 / 9,
    borderRadius: 15,
    borderColor: "black",
    transform: [{ scale: 0.9 }],
    alignContent: "center",
  },
});

export default withNavigation(FoodieList);
