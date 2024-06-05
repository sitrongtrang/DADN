import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const AlarmClock = ({ id, hour, minute, active, remove }) => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Image></Image>
                <Text style={styles.title}>{`${formatNumber(hour)}:${formatNumber(minute)}`}</Text>
                <Switch thumbColor={"#45b6fe"}/>
            </View>
            <View style={styles.section}>
                <Text>Wake up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', paddingHorizontal: 20, marginBottom: 5, paddingBottom: 10, padding: 5, borderBottomColor: '#e8e8e8', borderBottomWidth: 2, borderRadius: 10 },
    section: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 2 },
    title: { fontSize: 32, textAlign: 'center' },
});

export default AlarmClock;