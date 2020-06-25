import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const Card = (props) => {
  const { item } = props;
  return (
    <View>
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.image}} />
        </View>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.6,
    height: height * 0.2,
    borderRadius: 5,
  },
  imageWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  text: {
    marginTop: 5,
    color: "#000",
    fontSize: 18,
    fontWeight: "400",
    textTransform: "capitalize",
    marginLeft: 5

  },
});

Card.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  })
};

export default Card;
