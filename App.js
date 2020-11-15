import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import MessageScreen from './screens/MessageScreen';

export default function App() {
  return (
    <MessageScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 200,
    minHeight: 300
  }
});
