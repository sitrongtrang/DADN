import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const AlarmComponent = () => {
  const [alarmEnabled, setAlarmEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.alarmBox}>
        <Text style={styles.alarmTime}>06:00</Text>
        <View style={styles.alarmDetails}>
          <Text style={styles.alarmLabel}>Wake up</Text>
          <Switch
            value={alarmEnabled}
            onValueChange={setAlarmEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={alarmEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>
      <View style={styles.alarmBox}>
        <Text style={styles.alarmTime}>07:00</Text>
        <View style={styles.alarmDetails}>
          <Text style={styles.alarmLabel}>Go to school</Text>
          <Switch
            value={alarmEnabled}
            onValueChange={setAlarmEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={alarmEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsButton: {
    fontSize: 16,
    color: "#007AFF",
  },
  alarmBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  alarmTime: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  alarmDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  alarmLabel: {
    fontSize: 16,
    color: "#888",
    marginRight: 10,
  },
});

export default AlarmComponent;
