import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // Adjust the import path

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = async () => {
    const userInfo = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        { user: userInfo },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status >= 200 && response.status < 400) {
        const { token } = response.data; // Adjust according to your response structure
        setToken(token); // Set the token in context
        navigation.navigate("Profile"); // Navigate to the profile page
      }
    } catch (error) {
      console.error("Failed to log in:", error);
      setError(error.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <View className="flex-1 mt-10 items-center">
      <StatusBar barStyle={"opaque"} backgroundColor="black"></StatusBar>
      <View className="w-full pb-10">
        <TouchableOpacity
          className="left-8 bg-[#F7F7F9] rounded-full w-[50px] h-[50px] grid justify-center items-center"
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </TouchableOpacity>
      </View>
      <Text className="text-3xl font-semibold flex justify-center pb-5">
        Welcome back!
      </Text>
      <Text className="text-[#7D848D] flex justify-center">
        Please sign in to continue our app
      </Text>
      <View className="mt-5">
        <View className="h-10 justify-center w-[85vw]">
          <Text className="text-red-500 p-1 justify-center">{error || ""}</Text>
        </View>
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor="#ccc"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          className="w-vw bg-[#F7F7F9] rounded-xl p-3 mb-5"
        />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#ccc"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          className="w-vw bg-[#F7F7F9] rounded-xl p-3 mb-5"
        />
        <View className="mt-2">
          <Text className="text-right text-[#0D6EFD] font-semibold"> Forgot Password?</Text>
        </View>
        <TouchableOpacity
          onPress={handleLogIn}
          className="items-center justify-center bg-[#0D6EFD] rounded-xl mt-5"
        >
          <Text className="font-bold text-white text-center p-4 w-[85vw] px-6">
            Login
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-center mt-5">
          <Text className='text-[#7D848D] mr-2.5'>Don't have an account?</Text>
          <View className="items-center justify-center mt-10">
            <TouchableOpacity
              className="w-[85vw] h-[55] bg-[#2666DE] shadow-lg shadow-slate-100 items-center justify-center rounded-2xl"
              onPress={() => navigation.navigate("Signup")}
            >
              <Text className="font-bold text-white text-lg">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
