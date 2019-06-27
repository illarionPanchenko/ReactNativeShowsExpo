import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import '../../node_modules/react-native-vector-icons/FontAwesome'




class Header extends Component {
    state={
      data:''
    };
    Change=async (search)=>{
      await this.setState({data: search});
      await this.props.SubmitSearch(this.state.data);
    };
    render() {
    return (
    <View style={styles.header}>
        <View style={{height: 60}}>
            <SearchBar  placeholder='Search'
                        onChangeText={this.Change}
                        value={this.state.data}
                        lightTheme={true}
                        searchIcon={false}
            />
        </View>
        <Text style={styles.title}>{this.props.tv}</Text>

    </View>
    )
}
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#505caf',
        height: 116,
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.1,
        elevation: 7,
        position: 'relative'
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontFamily: 'Roboto',
        marginLeft: 25,
    },
});

export default Header;




