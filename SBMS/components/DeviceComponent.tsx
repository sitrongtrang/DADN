import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const DeviceComponent = ({ navigation }: any) => {
  const [lightEnabled, setLightEnabled] = React.useState(true);
  const [fanEnabled, setFanEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.deviceContainer}>
        <View style={styles.deviceBox}>
          <View style={styles.deviceIconContainer}>
            <Text style={styles.deviceIcon}>💡</Text>
            <Switch
              value={lightEnabled}
              onValueChange={setLightEnabled}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={lightEnabled ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
          <Text style={styles.deviceName}>Light 1</Text>
          <Text style={styles.deviceBrand}>Rạng Đông</Text>
        </View>
        <View style={styles.deviceBox}>
          <View style={styles.deviceIconContainer}>
            <Text style={styles.deviceIcon}>💨</Text>
            <Switch
              value={fanEnabled}
              onValueChange={setFanEnabled}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={fanEnabled ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
          <Text style={styles.deviceName}>Fan 1</Text>
          <Text style={styles.deviceBrand}>Panasonic</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsButton: {
    fontSize: 16,
    color: "#007AFF",
  },
  deviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deviceBox: {
    width: "45%",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    gap: 10,
  },
  deviceIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  deviceIcon: {
    fontSize: 28,
    color: "#4A4A4A",
  },
  deviceName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deviceBrand: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
});

export default DeviceComponent;
