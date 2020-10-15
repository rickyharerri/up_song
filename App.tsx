// components/Hello.tsx
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AuthNavigator from './navigation/routes';
import { Provider } from 'mobx-react';
import * as Store from './mobx/store'
export default class App extends React.Component<Props, State> {
  render() {
    return (
     <Provider store={Store} style={{ flex:1, backgroundColor:'#000' }}>
       <AuthNavigator/>
     </Provider>
    )
  }
}