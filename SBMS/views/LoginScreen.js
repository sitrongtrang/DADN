  import React, { useContext, useState } from "react";
  import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StatusBar,
  } from "react-native";
  // import { AuthContext } from "../hooks/AuthContext";
  import { useNavigation } from "@react-navigation/native";
  // import { LoginAPI } from "../apis/loginAPI";
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
  import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
  
  const LoginScreen = () => {
    const navigation = useNavigation();
    // const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogIn = async () => {
      const userInfo = { email, password };
  
      // const response = await LoginAPI(userInfo);
  
      if (response.data) {
        login(response.data.email);
        setError("");
        setEmail("");
        setPassword("");
      } else {
        setError("Please try logging in again!");
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
            label="abc"
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
            onPress={() => handleLogIn()}
            className="items-center justify-center bg-[#0D6EFD] rounded-xl mt-5"
          >
            <Text className="font-bold text-white text-center p-4 w-[85vw]  px-6">
              Login
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-center mt-5">
            <Text className='text-[#7D848D] mr-2.5'>Don't have an account?</Text>
            <Text className="mb-10 text-[#0D6EFD] font-semibold">Sign up</Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default LoginScreen;
