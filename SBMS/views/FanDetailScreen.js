import React, { useState, useLayoutEffect  } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'

const FanDetailScreen = ({ route, navigation }) => {
  const { name } = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const [level, setLevel] = useState("1");
  const [schedules, setSchedules] = useState([
    { from: "17:00", to: "23:00" },
    { from: "17:00", to: "23:00" },
    { from: "17:00", to: "23:00" },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name, 
    });
  }, [navigation, name]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0') + ':00');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather 
          style={{ padding: 10 }}
          name="wind"
          size={32}
          color="#007AFF"
        />
        <Ionicons name="information-circle-outline" size={24} color="dodgerblue" />
      </View>
      <View style={styles.controlSection}>
        <Text style={styles.sectionTitle}>Control</Text>
        <View style={styles.controlRow}>
          <Text>Turn on</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={"dodgerblue"} 
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.controlRow}>
          <Text>Level</Text>
          <Picker
            selectedValue={level}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setLevel(itemValue)}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
      </View>
      <View style={styles.scheduleSection}>
        <View style={styles.scheduleHeader}>
          <Text style={styles.sectionTitle}>Schedule</Text>
          <TouchableOpacity onPress={() => setSchedules([...schedules, { from: "17:00", to: "23:00" }])}>
            <Ionicons name="add-outline" size={24} color="dodgerblue" />
          </TouchableOpacity>
        </View>
        {schedules.map((schedule, index) => (
          <View key={index} style={styles.scheduleRow}>
            <Text>From</Text>
            <View style={styles.timePicker}>
              <Picker
                selectedValue={schedule.from}
                style={{ height: 50, width: 130 }}
                onValueChange={(itemValue, itemIndex) => {
                  const newSchedules = [...schedules];
                  newSchedules[index].from = itemValue;
                  setSchedules(newSchedules);
                }}
              >
                {hours.map((hour, index) => (
                  <Picker.Item key={index} label={hour} value={hour} />
                ))}
              </Picker>
            </View>
            <Text>To</Text>
            <View style={styles.timePicker}>
              <Picker
                selectedValue={schedule.to}
                style={{ height: 50, width: 130 }}
                onValueChange={(itemValue, itemIndex) => {
                  const newSchedules = [...schedules];
                  newSchedules[index].to = itemValue;
                  setSchedules(newSchedules);
                }}
              >
                {hours.map((hour, index) => (
                  <Picker.Item key={index} label={hour} value={hour} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity onPress={() => {
              const newSchedules = schedules.filter((_, i) => i !== index);
              setSchedules(newSchedules);
            }}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
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
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  controlSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  scheduleSection: {
    marginBottom: 16,
  },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  timePicker: {
    flex: 1,
  },
});

export default FanDetailScreen;
