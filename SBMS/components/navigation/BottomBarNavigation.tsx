import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";

// Import your screens
import WelcomeScreen from "@/views/WelcomeScreen";
import HistoryScreen from "@/views/HistoryScreen";
import MessageScreen from "@/views/MessageScreen";
import ProfileScreen from "@/views/ProfileScreen";
import DeviceScreen from "@/views/DeviceScreen";
import DashboardScreen from "@/views/DashboardScreen";
import { View } from "react-native";
import AccountInfoScreen from "@/views/AccountInfoScreen";
import HomeScreen from "@/views/HomeScreen";
// import AddScreen from "@/views/AddScreen"; // Assuming you have an AddScreen component

const Tab = createBottomTabNavigator();

export default function BottomBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FFFFFF", // Adjust this color if needed
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        tabBarActiveTintColor: "#007AFF", // Active tab label color
        tabBarInactiveTintColor: "#A0A0A0", // Inactive tab label color
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#007AFF",
                borderRadius: 100,
                padding: 5,
              }}
            >
              <MaterialCommunityIcons
                name="plus-circle"
                size={size + 5}
                color={"#FFFFFF"}
              />
            </View>
          ),
          tabBarLabel: () => null, // Hide the label
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        // component={AccountInfoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
