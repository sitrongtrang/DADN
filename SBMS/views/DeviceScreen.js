import React, { useState, useEffect, useContext } from 'react';
import {ActivityIndicator, View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather} from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import DeviceCard from '../components/DeviceCard'
import axios from 'axios';

const devices = [
  { id: 1, name: 'Light 1', brand: 'Rạng Đông', icon: 'bulb-outline', type: 'light' },
  { id: 2, name: 'Fan 1', brand: 'Panasonic', icon: 'wind', type: 'fan' },
  { id: 3, name: 'Light 2', brand: 'Rạng Đông', icon: 'bulb-outline', type: 'light' },
  { id: 4, name: 'Fan 2', brand: 'Panasonic', icon: 'wind', type: 'fan' },
];

const DeviceScreen = () => {
  const [editMode, setEditMode] = useState(false);
  // const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const numDevices = devices.length;

  // const fetchDevices = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:9000/api/device/",{
  //         withCredentials: true,
  //         headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`
  //         }
  //     });

  //     if (response.status >= 200 && response.status < 400) {
  //         console.log(response.data.message);
  //         const devices = response.data.devices
  //         setDevices(devices);
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       // Token is invalid
  //       // Clear the token and navigate to the login screen
  //       setToken(null); // Clear the token from state or storage
  //       navigation.navigate("Login"); // Navigate to the login screen
  //     } else {
  //       console.error("Error fetching user data", error);
  //     }
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchDevices();
  // }, []);

  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //     <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

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
      <Text style={styles.deviceCount}>{devices.length} devices</Text>
      <View style={styles.deviceGrid}>
        {devices.map(device => (
          <DeviceCard
            key={device.id}
            id = {device.id}
            name={device.name}
            brand={device.brand}
            icon={device.icon}
            IconComponent={device.type === 'light' ? Ionicons : Feather}
            type = {device.type}
            edit = {editMode}
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

export default DeviceScreen;
