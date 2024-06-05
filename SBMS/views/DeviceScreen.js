import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather} from '@expo/vector-icons';

const devices = [
  { id: 1, name: 'Light 1', brand: 'Rạng Đông', icon: 'bulb-outline', type: 'light' },
  { id: 2, name: 'Fan 1', brand: 'Panasonic', icon: 'wind', type: 'fan' },
  { id: 3, name: 'Light 2', brand: 'Rạng Đông', icon: 'bulb-outline', type: 'light' },
  { id: 4, name: 'Fan 2', brand: 'Panasonic', icon: 'wind', type: 'fan' },
];

const DeviceCard = ({ name, brand, icon, IconComponent, type }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();

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
        <IconComponent name={icon} size={32} color="blue" />
        <Text style={styles.deviceName}>{name}</Text>
        <Text style={styles.deviceBrand}>{brand}</Text>
        <View style={styles.switchContainer}>
            <Switch thumbColor={"#45b6fe"} 
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <Ionicons name="information-circle-outline" size={24} color="blue" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

const DeviceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.deviceCount}>4 devices</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.deviceGrid}>
        {devices.map(device => (
          <DeviceCard
            key={device.id}
            name={device.name}
            brand={device.brand}
            icon={device.icon}
            IconComponent={device.type === 'light' ? Ionicons : Feather}
            type = {device.type}
          />
        ))}
      </View>
    </View>
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
    color: 'blue',
  },
  deviceCount: {
    color: 'grey',
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
    alignItems: 'center',
    position: 'relative',
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
});

export default DeviceScreen;
