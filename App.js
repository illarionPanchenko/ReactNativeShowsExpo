import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from "./components/header";
import Cards from "./components/cards";
import { createAppContainer, createStackNavigator} from 'react-navigation';
import CardInfo from "./components/cardInfo";





class HomeScreen extends Component {

  state = {
    data: [],
    tv: 'friends',
  };

  componentDidMount = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.tv}`);
    const data = await res.json();
    this.setState({data: data});
  };
  Search = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.tv}`);
    const data = await res.json();
    this.setState({data: data});
  };
  PressOnCard = async () => {
    console.log('ALLO');
    await this.setState({tv: 'stargate'});
    await this.Search();
  };

  cardsNav = (data) => {
    this.props.navigation.navigate('CardInfo',{
      'name': data.name||'',
      'genres': data.genres[0]||'',
      'image': data.image||'',
      'summary': data.summary||''
    });
  };
  SubmitSearch=(value)=>{
    this.setState({tv: value});
    this.Search();
  };


  render() {

    return (
        <View style={styles.container}>
          <Header tv={this.state.tv} data={this.state.data}
                  SubmitSearch={this.SubmitSearch}
          />
          <ScrollView>
            <View style={styles.scrollCont}>
              {this.state.data.map((item) => (
                  <Cards
                      data={item.show}
                      key={item.show.id}
                      onPress={this.PressOnCard}
                      navigate={this.cardsNav}
                  />
              ))}
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 100+'%',
  },
  scrollCont: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 150,
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Header: {
    screen: HomeScreen,
  },
  CardInfo: {
    screen: CardInfo,
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      height: 0,
      width: 0,
      leftIcon: false,
    }}
});

export default createAppContainer(AppNavigator);