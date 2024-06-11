import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlarmClock = ({ id, hour, minute, remove }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleRemove = () => {
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainSection}>
                <View style={styles.leftSection}>
                    {remove ? (
                        <TouchableOpacity onPress={handleRemove} style={styles.trashButton}>
                            <Ionicons name="trash-outline" size={24} color="red" />
                        </TouchableOpacity>
                    ) : (
                        <Icon style={styles.trashButton} name="clock-o" size={24} color="dodgerblue" />
                    )}
                    <View style={styles.textSection}>
                        <Text style={styles.title}>{hour} : {minute}</Text>
                        <Text style={styles.subtitle}>Wake up</Text>
                    </View>
                </View>
                {remove ?  (
                    <TouchableOpacity
                        style={styles.arrowButton}
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </TouchableOpacity>
                    ) : (<Switch
                        thumbColor={"dodgerblue"}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />)
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginBottom: 5,
        paddingBottom: 10,
        padding: 5,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 2,
        borderRadius: 10,
    },
    mainSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 2,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textSection: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'gray',
    },
    trashButton: {
        marginRight: 30,
    },
    arrowButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#F7F7F9',
        borderRadius: 20,
    },
});

export default AlarmClock;
