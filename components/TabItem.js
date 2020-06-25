import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const TabItem = (props) => {
  const { title, image } = props;
  return (
    <View>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width / 4,
    height: height * 0.1,
    borderRadius: 5,
  },
  text: {
    marginTop: 3,
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
    textTransform: "capitalize",
    marginLeft: 5,
  },
});

TabItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default TabItem;
