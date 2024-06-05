import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 h-vh bg-slate-100">
      <StatusBar barStyle={"opaque"} backgroundColor="black"></StatusBar>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        className="flex-1 h-vh"
        resizeMode="contain"
      >
        <View className="flex-1 justify-between my-14 items-center">
          <Image
                source={require('../assets/images/tech.jpg')}
                className="rounded-full w-[250px] h-[250px] mt-20"
                resizeMode="stretch"
          />
          <View>
            <Text className="text-3xl font-bold text-[#007AFF] text-center w-[80vw]">
              Welcome to SBMS!
            </Text>
            <Text className="font-bold text-[#7D848D] text-center w-[80vw] mt-5">
              The brilliance of your smart bedroom!
            </Text>
          </View>
          <View>
            <View className="items-center justify-center mt-10">
              <TouchableOpacity
                className="w-[85vw] h-[55] bg-[#2666DE] shadow-lg shadow-slate-100 items-center justify-center rounded-2xl"
                onPress={() => navigation.navigate("Login")}
              >
                <Text className="font-bold text-white text-lg">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

