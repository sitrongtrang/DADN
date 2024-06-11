import React, { useState, useEffect, useContext } from 'react';
import {ActivityIndicator, View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather} from '@expo/vector-icons';

const DeviceCard = ({ id, name, brand, icon, IconComponent, type, edit }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    const onDelete = () => {
      
    };

    const handlePress = () => {
      if (type === 'fan') {
        navigation.navigate('FanDetail', { name });
      } 
      if (type === 'light') {
        navigation.navigate('LightDetail', { name });
      }
    };
  
    return (
      <TouchableOpacity style={styles.deviceCard} onPress={handlePress}>
        <View style={styles.deleteButton}>{edit ? (<TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>) : (<View></View>)}
        </View>
        <View style={styles.deviceIcon}>
          <IconComponent name={icon} size={32} color="dodgerblue" />
          <Switch thumbColor={"dodgerblue"} 
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              onValueChange={toggleSwitch}
              value={isEnabled}
          />
        </View>
        <Text style={styles.deviceName}>{name}</Text>
        <Text style={styles.deviceBrand}>{brand}</Text>
        <TouchableOpacity style={styles.infoButton}>
          <Ionicons name="information-circle-outline" size={24} color="dodgerblue" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    deviceCount: {
      color: 'grey',
      fontSize: 20,
    },
    addButton: {
      backgroundColor: 'lightgrey',
      borderRadius: 16,
      padding: 8,
    },
    deviceGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 16,
    },
    deviceCard: {
      width: '48%',
      backgroundColor: '#f9f9f9',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      alignItems: 'flex-start',
      position: 'relative',
    },
    deviceIcon:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
    },
    deviceName: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: 'bold',
    },
    deviceBrand: {
      color: 'grey',
    },
    infoButton: {
      position: 'absolute',
      top: 8,
      right: 8,
    },
    deleteButton: {
      position: 'absolute',
      top: 8,
      left: 8,
    },
  });

export default DeviceCard;