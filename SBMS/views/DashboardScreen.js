import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
  const [autoMode, setAutoMode] = useState(true);
  const [minLight, setMinLight] = useState('200');
  const [maxLight, setMaxLight] = useState('800');
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await axios.get('https://api.example.com/devices');
      setDevices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.sensorContainer}>
        <View style={styles.sensorBox}>
          <Text style={styles.sensorTitle}>Light</Text>
          <Text style={styles.sensorValue}>500 cd</Text>
        </View>
        <View style={styles.sensorBox}>
          <Text style={styles.sensorTitle}>Temperature</Text>
          <Text style={styles.sensorValue}>26 °C</Text>
        </View>
        <View style={styles.sensorBox}>
          <Text style={styles.sensorTitle}>Humidity</Text>
          <Text style={styles.sensorValue}>50 %</Text>
        </View>
      </View>
      <View style={styles.autoModeContainer}>
        <Text style={styles.autoModeText}>Auto Mode</Text>
        <Switch 
          value={autoMode}
          onValueChange={(value) => setAutoMode(value)}
        />
      </View>
      {autoMode ? (
        <View style={styles.lightSettingsContainer}>
          <View style={styles.lightSetting}>
            <Text style={styles.lightSettingLabel}>Minimum light</Text>
            <TextInput
              style={styles.lightSettingInput}
              value={minLight}
              onChangeText={setMinLight}
              keyboardType="numeric"
            />
            <Text style={styles.lightSettingUnit}>cd</Text>
          </View>
          <View style={styles.lightSetting}>
            <Text style={styles.lightSettingLabel}>Maximum light</Text>
            <TextInput
              style={styles.lightSettingInput}
              value={maxLight}
              onChangeText={setMaxLight}
              keyboardType="numeric"
            />
            <Text style={styles.lightSettingUnit}>cd</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.deviceTitle}>{devices.length} devices</Text>
          <FlatList
            data={devices}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.deviceBox}>
                <Text style={styles.deviceName}>{item.name}</Text>
                <Text style={styles.deviceBrand}>{item.brand}</Text>
                <Switch
                  value={item.status}
                  onValueChange={(value) => {
                  }}
                />
              </View>
            )}
          />
        </View>
      )}
      {/* <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sensorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sensorBox: {
    alignItems: 'center',
  },
  sensorTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  sensorValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  autoModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  autoModeText: {
    fontSize: 16,
  },
  lightSettingsContainer: {
    marginBottom: 20,
  },
  lightSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  lightSettingLabel: {
    flex: 1,
    fontSize: 16,
  },
  lightSettingInput: {
    width: 60,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'right',
    marginRight: 10,
  },
  lightSettingUnit: {
    fontSize: 16,
  },
  deviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deviceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deviceBrand: {
    fontSize: 14,
    color: '#666',
  },
  // navBar: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   paddingVertical: 10,
  //   borderTopWidth: 1,
  //   borderColor: '#ccc',
  // },
  // navItem: {
  //   alignItems: 'center',
  // },
  // navText: {
  //   fontSize: 16,
  // },
});

export default DashboardScreen;