import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    text: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        backgroundColor: '#D3D3D3',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft:15,
        paddingRight:15,
        color: '#696969',
        fontSize: 14,
        fontWeight: '400',
        textTransform: 'capitalize',
        borderRadius: 25,
        marginTop: 15
    }
});

const Item = ({ text }) => <Text style={styles.text}>{text}</Text>

Item.propTypes = {
    text: PropTypes.string
}

export default Item;
