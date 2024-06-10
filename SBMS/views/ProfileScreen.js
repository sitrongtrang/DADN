import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons/faQrcode";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faShare } from "@fortawesome/free-solid-svg-icons/faShare";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons/faCircleQuestion";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={"opaque"} backgroundColor="black"></StatusBar>
      <View className="flex items-end mx-5">
        <TouchableOpacity className="w-[40px] h-[40px] rounded-full bg-[#0D6EFD] flex items-center justify-center">
          <FontAwesomeIcon icon={faQrcode} size={25} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-[#fafafa] flex px-5 py-2 mx-5 rounded-3xl shadow mt-5 flex-row items-center">
        <View className="bg-[#0D6EFD] w-[40px] h-[40px] rounded-full flex items-center justify-center mr-5">
          <FontAwesomeIcon icon={faUser} size={20} color="white" />
        </View>
        <View>
          <Text className="text-xl font-semibold">Doraemon</Text>
          <Text className="text-[#a6a3a3]">sbms@gmail.com</Text>
        </View>
      </TouchableOpacity>
      <View className="bg-[#fafafa] flex px-5 py-2 mx-5 rounded-3xl shadow mt-[40px]">
        <TouchableOpacity className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <FontAwesomeIcon icon={faGear} size={20} color="#0D6EFD" />
            <Text className="ml-2 text-lg">Setting</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#7d7d7d" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <FontAwesomeIcon icon={faShare} size={20} color="#0D6EFD" />
            <Text className="ml-2 text-lg">Sharing</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#7d7d7d" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-full p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size={20}
              color="#0D6EFD"
            />
            <Text className="ml-2 text-lg">Support</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#7d7d7d" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="bg-[#fafafa] flex px-5 py-2 mx-5 rounded-3xl shadow mt-5">
        <TouchableOpacity className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <FontAwesomeIcon icon={faFileLines} size={20} color="#0D6EFD" />
            <Text className="ml-2 text-lg">CHÍNH SÁCH BẢO MẬT</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#7d7d7d" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <FontAwesomeIcon icon={faFileLines} size={20} color="#0D6EFD" />
            <Text className="ml-2 text-lg">CHÍNH SÁCH HỦY, TRẢ</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#7d7d7d" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-full p-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <FontAwesomeIcon icon={faFileLines} size={20} color="#0D6EFD" />
            <Text className="ml-2 text-lg">CHÍNH SÁCH THANH TOÁN</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#7d7d7d" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-[#fafafa] flex px-5 py-4 mx-5 rounded-3xl shadow mt-[40px] items-center justify-center">
        <Text className="text-[#ff0000] text-lg font-semibold">Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ProfileScreen;
