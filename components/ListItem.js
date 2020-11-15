import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import RoundedIcon from './RoundedIcon';
import ListItemThumb from './ListItemThumb';

export default function ListItem({icon, title, subText, handler, swipeRightView}) {
    return (
        //(p) => <View style={{width:100, backgroundColor: colors.flatRed}}></View>
        <Swipeable renderRightActions={swipeRightView}>
            <TouchableHighlight
                onPress={handler}
                underlayColor={colors.light}
                >
                <View style={styles.listItem}>
                    <ListItemThumb backgroundColor={colors.flatRed} />
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.listText}>{title}</Text>
                        {subText && <Text style={styles.listSubtext}>{subText}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    listItem : {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#fff',
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row"
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "yellow"
    },
    listText: {
        color: "#333",
        fontSize: 14,
        width: "100%"
    },
    listSubtext: {
        color: "grey",
        fontSize:  12,
        width: "100%"
    }
})
