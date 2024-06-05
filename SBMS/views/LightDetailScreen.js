import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'

const LightDetailScreen = ({ route, navigation }) => {
  const { name } = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const [level, setLevel] = useState("1");
  const [schedules, setSchedules] = useState([
    { from: "17:00", to: "23:00" },
    { from: "17:00", to: "23:00" },
    { from: "17:00", to: "23:00" },
  ]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          className="left-8 bg-[#F7F7F9] rounded-full w-[50px] h-[50px] grid justify-center items-center"
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{name}</Text>
        <Ionicons name="information-circle-outline" size={24} color="blue" />
      </View>
      <View style={styles.controlSection}>
        <Text style={styles.sectionTitle}>Control</Text>
        <View style={styles.controlRow}>
          <Text>Turn on</Text>
          <Switch
            thumbColor={"#45b6fe"} 
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.scheduleSection}>
        <Text style={styles.sectionTitle}>Schedule</Text>
        {schedules.map((schedule, index) => (
          <View key={index} style={styles.scheduleRow}>
            <View style={styles.timePicker}>
              <Picker
                selectedValue={schedule.from}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => {
                  const newSchedules = [...schedules];
                  newSchedules[index].from = itemValue;
                  setSchedules(newSchedules);
                }}
              >
                <Picker.Item label="17:00" value="17:00" />
                <Picker.Item label="18:00" value="18:00" />
                <Picker.Item label="19:00" value="19:00" />
              </Picker>
            </View>
            <Text>To</Text>
            <View style={styles.timePicker}>
              <Picker
                selectedValue={schedule.to}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => {
                  const newSchedules = [...schedules];
                  newSchedules[index].to = itemValue;
                  setSchedules(newSchedules);
                }}
              >
                <Picker.Item label="23:00" value="23:00" />
                <Picker.Item label="22:00" value="22:00" />
                <Picker.Item label="21:00" value="21:00" />
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
        <TouchableOpacity onPress={() => setSchedules([...schedules, { from: "17:00", to: "23:00" }])}>
          <Ionicons name="add-circle-outline" size={24} color="blue" />
        </TouchableOpacity>
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

export default LightDetailScreen;
