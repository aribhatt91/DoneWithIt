import React from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {
                children
            }
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ececec',
        flex: 1
    } 
})
export default Screen;