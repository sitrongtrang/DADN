import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
  } from "react-native";
  import React from "react";
  import { Action } from "@/components/Action";


  const HistoryScreen = () => {
    return (
      <SafeAreaView className="flex-1 bg-white mb-[70]">
        <StatusBar barStyle={"opaque"} backgroundColor="black"></StatusBar>
        <View className="border-b-[1px] border-[#ccc] flex items-center py-5">
          <Text className="text-xl font-semibold">History</Text>
        </View>
        <View className="mt-5 mx-7">
            <View>
              <Text>2 actions</Text>
              <Action content="Light 1 has been turned off because the light exceeds." date="12/2/2024" time="10:00" ></Action>
              <Action content="Light 1 has been turned off because the light exceeds." date="12/2/2025" time="12:00" ></Action>
            </View>
        </View>
      </SafeAreaView>
    );
  }
  export default HistoryScreen;
