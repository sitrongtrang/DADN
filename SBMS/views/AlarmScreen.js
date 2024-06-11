import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AlarmClock from '../components/AlarmClock';
//import axios from 'axios';

const AlarmScreen = () => {
    const [alarms, setAlarms] = useState([]);

    return (
        <View style={styles.container}>
            <ScrollView style={{ flexGrow: 1, width: '100%', height: '100%' }}>
                <View>
                    {alarms.map((alarm, i) => <AlarmClock key={alarm.id} id={alarm.id} hour={alarm.hour} minute={alarm.minute} active={alarm.active} remove={remove} />)}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    container: { flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f2f5' },
    panel: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    button: { position: 'absolute', bottom: 70, left: Dimensions.get('window').width / 2 - 110 },
    colors: { black: '#000', white: 'white' },

});

export default AlarmScreen;