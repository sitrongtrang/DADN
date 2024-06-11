import AlarmComponent from "@/components/AlarmComponent";
import DeviceComponent from "@/components/DeviceComponent";
import { FontAwesome, Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import DeviceCard from '../components/DeviceCard'
import {
  View,
  Text,
  Switch,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";

const DashboardScreen = ({ navigation }) => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Light 1', brand: 'Rạng Đông', icon: 'bulb-outline', type: 'light' },
    { id: 2, name: 'Fan 1', brand: 'Panasonic', icon: 'wind', type: 'fan' },
    { id: 3, name: 'Light 2', brand: 'Rạng Đông', icon: 'bulb-outline', type: 'light' },
    { id: 4, name: 'Fan 2', brand: 'Panasonic', icon: 'wind', type: 'fan' },
  ]);

  // Uncomment and use this useEffect for fetching devices from an API
  // useEffect(() => {
  //   fetchDevices();
  // }, []);

  // const fetchDevices = async () => {
  //   try {
  //     const response = await axios.get('https://api.example.com/devices');
  //     setDevices(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [autoMode, setAutoMode] = useState(true);
  const [minLight, setMinLight] = useState('200');
  const [maxLight, setMaxLight] = useState('800');
  const [minTemp, setMinTemp] = useState('18');
  const [maxTemp, setMaxTemp] = useState('30');
  const [stat, setStat] = useState('');

  // const setMin = () => {
  //   if (stat == 'Light') 
  // }

  return (
    <View style={styles.container}>
      <View style={styles.dashboardContainer}>
        <TouchableOpacity onPress={() => {autoMode ? setStat('cd') : setStat('')}} style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Light</Text>
          <MaterialIcons
            style={{ padding: 10 }}
            name="light-mode"
            size={32}
            color="#007AFF"
          />
          <Text style={styles.dashboardValue}>500 cd</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {autoMode ? setStat('°C') : setStat('')}} style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Temperature</Text>
          <FontAwesome
            style={{ padding: 10 }}
            name="thermometer-4"
            size={32}
            color="#007AFF"
          />
          <Text style={styles.dashboardValue}>26 °C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setStat('')}} style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Humidity</Text>
          <Ionicons
            style={{ padding: 10 }}
            name="water-outline"
            size={32}
            color="#007AFF"
          />
          <Text style={styles.dashboardValue}>50 %</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.autoModeContainer}>
        <Text style={styles.autoModeText}>Auto Mode</Text>
        <Switch 
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"dodgerblue"} 
          value={autoMode}
          onValueChange={(value) => setAutoMode(value)}
        />
      </View>
      {autoMode ? stat === '' ? (<View></View>) : (
        <View style={styles.lightSettingsContainer}>
          <View style={styles.lightSetting}>
            <Text style={styles.lightSettingLabel}>Minimum {stat === 'cd' ? 'light' : 'temperature'}</Text>
            <TextInput
              style={styles.lightSettingInput}
              value={stat === 'cd' ? minLight : minTemp}
              onChangeText={stat === 'cd' ? setMinLight : setMinTemp}
              keyboardType="numeric"
            />
            <Text style={styles.lightSettingUnit}>{stat}</Text>
          </View>
          <View style={styles.lightSetting}>
            <Text style={styles.lightSettingLabel}>Maximum {stat === 'cd' ? 'light' : 'temperature'}</Text>
            <TextInput
              style={styles.lightSettingInput}
              value={stat === 'cd' ? maxLight : maxTemp}
              onChangeText={stat === 'cd' ? setMaxLight : setMaxTemp}
              keyboardType="numeric"
            />
            <Text style={styles.lightSettingUnit}>{stat}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.deviceCount}>4 devices</Text>
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
                edit = {false}
              />
            ))}
          </View>
        </View>
      )}
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
  headerDeviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  dashboardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  dashboardBox: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  dashboardTitle: {
    fontSize: 16,
    color: "#888",
  },
  dashboardValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
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
  deviceCount: {
    color: 'grey',
    fontSize: 20,
  },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default DashboardScreen;
