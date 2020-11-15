import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../screens/Screen';

const PickerItem = ({label, value, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.pickerItem}>{label}</Text>
        </TouchableOpacity>
    )
}
export default function AppPicker({icon, placeholder, items, onSelectItem, selectedItem, ...rest}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {setShowModal(true)}}>
                <View style={styles.container}>
                    {
                        icon && <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color="#333"
                            style={styles.icon}
                        />
                    }
                    <Text style={styles.text} {...rest}> { selectedItem ? selectedItem.label : placeholder } </Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color="#333"
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={showModal} animationType="slide">
                <Screen>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={(item) => 
                        <PickerItem 
                            label={item.label}
                            onPress={() => {
                                setShowModal(false);
                                if(typeof onSelectItem === 'function'){
                                    onSelectItem(item)
                                }
                            }}
                            
                            /> }
                    />
                    <Button title="Close" onPress={() => setShowModal(false)}></Button>
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        fontSize: 14,
        flex: 1
    },
    pickerItem: {
        ...this.text,
        padding: 8
    }
})


