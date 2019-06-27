import React from 'react'
import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import {Button} from 'react-native-elements';
import {w} from "../../constants";


export default class CardInfo extends React.Component {
    render() {
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        const genres = navigation.getParam('genres');
        const summary = navigation.getParam('summary').replace( /<.*?>/g, '' );
        const image = navigation.getParam('image');
        let img;
        if(image){img = `https${image.medium.slice(4)}`}else{
            img ='https://static.thenounproject.com/png/331325-200.png'}
        const {background, h1, h2, h3, butt} = styles;
        return (
            <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image style={background} source={{uri: img}}/>
                <Text style={h1}>{name}</Text>
                <Text style={h2}>{genres}</Text>
                <Text style={h3}>{summary}</Text>
                <View style={butt}>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                </View>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    background:{
        width: w,
        height: w * 0.6,
    },
    h1:{
        fontWeight:'bold',
        fontSize: 30,
    },
    h2:{
        fontWeight:'bold',
        fontSize: 20,
        margin: 20,
        color: '#39f',
    },
    h3:{

        fontSize: 18,
        margin: 20,
    },
    butt:{
      margin: 20,
    }
});