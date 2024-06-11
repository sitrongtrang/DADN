import AlarmComponent from "@/components/AlarmComponent";
import DeviceComponent from "@/components/DeviceComponent";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [devices, setDevices] = useState([
    { id: "1", name: "Light 1", brand: "Rạng Đông", status: true },
    { id: "2", name: "Fan 1", brand: "Panasonic", status: false },
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

  const renderDevice = ({ item }) => (
    <View style={styles.deviceBox}>
      <View>
        <Text style={styles.deviceName}>{item.name}</Text>
        <Text style={styles.deviceBrand}>{item.brand}</Text>
      </View>
      <Switch
        value={item.status}
        onValueChange={(value) => {
          const updatedDevices = devices.map((device) =>
            device.id === item.id ? { ...device, status: value } : device
          );
          setDevices(updatedDevices);
        }}
      />
    </View>
  );
  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const handlePressDashboardDetails = () => {
    navigation.navigate("DashboardScreen");
  }
  const handlePressDeviceDetails = () => {
    navigation.navigate("DeviceScreen");
  };
  const handlePressAlarmDetails = () => {
    navigation.navigate("AlarmScreen");
  };

  const currentDate = getCurrentDate();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
          gap: 10,
          paddingBottom: 10,
        }}
      >
        <Ionicons name="bed-outline" size={32} color="black" />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>My bedroom</Text>
          <Text style={styles.subHeader}>{currentDate} | 1 Tạ Quang Bửu</Text>
        </View>
      </View>
      <View style={styles.headerDeviceContainer}>
        <Text style={styles.header}>Dashboard</Text>
        <TouchableOpacity onPress={handlePressDashboardDetails}>
          <Text style={styles.detailsButton}>Details {">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dashboardContainer}>
        <View style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Light</Text>
          <MaterialIcons
            style={{ padding: 10 }}
            name="light-mode"
            size={32}
            color="#007AFF"
          />
          <Text style={styles.dashboardValue}>500 cd</Text>
        </View>
        <View style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Temperature</Text>
          <FontAwesome
            style={{ padding: 10 }}
            name="thermometer-4"
            size={32}
            color="#007AFF"
          />
          <Text style={styles.dashboardValue}>26 °C</Text>
        </View>
        <View style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Humidity</Text>
          <Ionicons
            style={{ padding: 10 }}
            name="water-outline"
            size={32}
            color="#007AFF"
          />
          <Text style={styles.dashboardValue}>50 %</Text>
        </View>
      </View>
      <View style={styles.headerDeviceContainer}>
        <Text style={styles.header}>Alarms</Text>
        <TouchableOpacity onPress={handlePressAlarmDetails}>
          <Text style={styles.detailsButton}>Details {">"}</Text>
        </TouchableOpacity>
      </View>
      <AlarmComponent />
      <View style={styles.headerDeviceContainer}>
        <Text style={styles.header}>Devices</Text>
        <TouchableOpacity onPress={handlePressDeviceDetails}>
          <Text style={styles.detailsButton}>Details {">"}</Text>
        </TouchableOpacity>
      </View>
      <DeviceComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
  },
  subHeader: {
    fontSize: 14,
    color: "#888",
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
  alarmContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginVertical: 20,
  },
  alarmTime: {
    fontSize: 24,
    fontWeight: "bold",
  },
  alarmLabel: {
    fontSize: 16,
    color: "#888",
  },
  devicesContainer: {
    marginBottom: 20,
  },
  detailsButton: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
  },
  deviceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deviceBrand: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
