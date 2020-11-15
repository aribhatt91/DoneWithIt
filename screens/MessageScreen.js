import React, { useState } from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from './Screen';
import ListItemSwipeActions from '../components/ListItemSwipeActions';
import colors from '../config/colors';
import AppPicker from '../components/AppPicker';

function MessageScreen(props) {
    let initial_messages = [
        {
            id: 'm1',
            title: 'Message from Siri',
            details: 'Hello! how are you'
        },
        {
            id: 'm2',
            title: 'Message from Google',
            details: 'Google says Hello!'
        },
        {
            id: 'm3',
            title: 'Message from Alexa',
            details: 'Whats\'s up?'
        }
    ]
    const [messages, setMessages] = useState(initial_messages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = (item) => {

    }
    return (
        <Screen>
            <AppPicker placeholder="Category" icon="apps" />
            <Text style={styles.header}>You have messages</Text>
            <FlatList
                data={messages}
                keyExtractor={message => message.id}
                refreshing={refreshing}
                onRefresh={() => setMessages([
                    {
                        id: 'm4',
                        title: 'Message from Apple',
                        details: 'Hello! how are you'
                    },
                    {
                        id: 'm5',
                        title: 'Message from Amazon',
                        details: 'Google says Hello!'
                    },
                    {
                        id: 'm6',
                        title: 'Message from Flipkart',
                        details: 'Whats\'s up?'
                    }
                ])}
                renderItem={({item})=> (
                <ListItem
                    title={item.title}
                    subText={item.details}
                    handler={()=> console.log("Pressed", item)}
                    swipeRightView={() => <ListItemSwipeActions icons={['trash-can']}/>}
                />)}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    header: {
      color: "#333",
      fontSize: 18,
      fontWeight: "500",
      marginTop: 16,
      marginBottom: 16
    }
  });
  

export default MessageScreen;