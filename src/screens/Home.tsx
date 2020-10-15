// components/Hello.tsx
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { styles } from './styles';
import { Card } from '../components/headlineCell';
import { baseUrl } from '../components/config';
import { inject, observer } from "mobx-react";
import { toJS } from 'mobx';

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width;

class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    console.log('1111',this.props);
    this.state = {
      headlinesArray: [],
      loading: true
    }
    this.props.store.default.searchNews();
  }

  moveToDetailsScreen = (item: any) => {
    // navigate to next screen
    this.props.navigation.navigate('DetailsScreen', { item: item })
  }

  callLoader = () => {
    // loading indicator
    return (
      <View style={{ height: height, width: width, position: 'absolute', zIndex: 9999, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator
          size={'large'}
          color={'white'}
        />
      </View>
    )
  }

  componentDidMount = () => {
    // Api call to fetch headlines
    this.setState({ headlinesArray : toJS(this.props.store.default.news).articles })
  }
  
  render() {    
    return (
      <View style={{ flex: 1, backgroundColor: '#2B1A44' }}>
        <SafeAreaView />
        {this.props.store.default.loading ? this.callLoader() : <View />}
        <View style={[styles.innerView, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <Image
            source={require("../../assets/icons/menu.png")}
            style={{ height: 25, width: 25, position: 'absolute', left: 10 }}
          />
          <Text style={styles.title}>
            Headlines
          </Text>
          <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate('Privacy')}
            style={{ height: 25, width: 25, position: 'absolute', right: 10  }}>
            <Image
              source={require("../../assets/icons/privacy-policy.png")}
              style={{ height: 25, width: 25, }}
            />
          </TouchableOpacity>
        </View>
        {this.state.headlinesArray && this.state.headlinesArray.length > 0 ?
          <FlatList
            style={{ marginTop: 10 }}
            data={this.state.headlinesArray}
            renderItem={({ item, index }) => {
              return (
                <Card
                  item={item}
                  clickHandler={this.moveToDetailsScreen}
                />
              )
            }}
          /> : <View />}
        <SafeAreaView />
      </View>
    )
  }
}

export default inject("store")(observer(Home));
