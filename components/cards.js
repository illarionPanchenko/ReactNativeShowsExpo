import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {h, w} from '../../constants'



const Cards = ({data, navigate}) => {
    const image = data.image;
    const { h1, cover, container } = styles;
    let img;
    if(image){img = `https${image.medium.slice(4)}`}else{
        img ='https://static.thenounproject.com/png/331325-200.png'}
    return(
        <TouchableOpacity onPress={()=>navigate(data)}>
        <View style = {container}>
            <Image style={cover} source={{uri: img}}/>
        <Text style={h1}>{data.name.toUpperCase()}</Text>

        </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    h1:{
        fontSize: 18,
        fontFamily: 'Roboto',
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4,
        height: h / 13,
        fontWeight: 'bold',
    },
    cover:{
      width: w/2.4,
      height: w * 0.6,
        borderRadius: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: w/2.1,
    }
});

export default Cards;