import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AlarmClock from '../components/AlarmClock';
import { Ionicons} from '@expo/vector-icons';
//import axios from 'axios';

const AlarmScreen = () => {
    const [editMode, setEditMode] = useState(false);
    const [alarms, setAlarms] = useState([
        {id: 1, hour: "06", minute: "30"},
        {id: 2, hour: "06", minute: "30"},
        {id: 3, hour: "06", minute: "30"},
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {setEditMode(previousState => !previousState);}}>
                {editMode ? (<Text style={styles.editButton}>Done</Text>) :
                (<Text style={styles.editButton}>Edit</Text>)}
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flexGrow: 1, width: '100%', height: '100%' }}>
                <View style={styles.alarmGrid}>
                    {alarms.map((alarm, i) => <AlarmClock key={alarm.id} id={alarm.id} hour={alarm.hour} minute={alarm.minute} remove={editMode} />)}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1 
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
      editButton: {
        color: 'dodgerblue',
        fontSize: 20,
    },
    panel: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    button: { 
        position: 'absolute', 
        bottom: 70, 
        left: Dimensions.get('window').width / 2 - 110 
    },
    colors: { 
        black: '#000', 
        white: 'white' 
    },
    alarmGrid: {
        marginTop: 16,
    },

});

export default AlarmScreen;