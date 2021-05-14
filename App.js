import React from 'react';
import { WebView } from 'react-native-webview'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Dimensions} from "react-native-web";

function HomeScreen() {
  return (
      <WebView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={{ uri: 'https://lifeinvogue.vogue.it/' }} />
  );
}

function WebViewOneScreen() {
  return (
      <WebView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={{ uri: 'https://dark.netflix.io/en' }} />
  );
}

function WebViewTwoScreen() {
    return (
          <WebView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={{ uri: 'https://50-jahre-hitparade.ch/' }} />
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Webview1" component={WebViewOneScreen} />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="WebView1" component={WebViewOneScreen} />
        <Tab.Screen name="WebView2" component={WebViewTwoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}