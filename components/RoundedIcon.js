import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function RoundedIcon({backgroundColor = "#000", size = 40, iconColor = "#fff", name = "email"}) {
    return (
        <View style={{
                backgroundColor,
                width: size,
                height: size,
                borderRadius: size/2,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    );
}

export default RoundedIcon;