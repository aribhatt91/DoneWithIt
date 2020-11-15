import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import RoundedIcon from './RoundedIcon'

export default function ListItemThumb({icon, backgroundColor = "#333", src, size=40}) {
    return (
        <View style={styles.listThumb}>
            {(icon || !src) && <RoundedIcon name={icon} backgroundColor={backgroundColor} size={size}/>}
            {!icon && src && <Image source={src} style={styles.listThumbImg}/> }
        </View>
    )
}

const styles = StyleSheet.create({
    listThumb : {
        height: 48,
        width: 48,
        marginRight: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ececec"
    },
    listThumbImg : {
        width: "100%"
    }}
)
