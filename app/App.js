import React, { Component } from "react";
import  HomePage from "./screens/Home"
import ResultPage from "./screens/Result"
import { StackNavigator } from 'react-navigation';
import reducer from "./reducer"
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { View } from 'react-native';
import style from "./styles";

const store = createStore(reducer);

const Stack = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
        header: null
    }
  },
  Result: {
    screen: ResultPage
  }
},
{
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    console.log("Hello App Component");
    return (
      <Provider store={store}>
        <View style={style.screen}>
          <Stack />
        </View>
      </Provider>
      )
  }
}