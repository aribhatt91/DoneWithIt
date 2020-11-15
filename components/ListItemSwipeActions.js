import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemSwipeActions({ handlers, icons }) {
    let action_items = [];
    (icons || []).forEach( (icon, index) => {
        let handler = handlers && handlers[index] && typeof handlers[index] === 'function' ? handlers[index] : () => {console.log('Action item clicked')}
        action_items.push(
            <TouchableWithoutFeedback onPress={handler}>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name={icon} size={22} color="#fff" />
                </View>
            </TouchableWithoutFeedback>
        )
    })
    return (
        <View style={styles.actionContainer}>
            {
                action_items
            }
        </View>
    );
}
const styles = StyleSheet.create({
    actionContainer: {
        backgroundColor: colors.flatRed,
        minWidth: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default ListItemSwipeActions;