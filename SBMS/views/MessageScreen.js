import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { PersonalMessage } from "@/components/PersonalMessage";
import { SystemMessage } from "@/components/SystemMessage";

const MessageScreen = () => {
  const [typeMessage, setMessageType] = useState("personal");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={"opaque"} backgroundColor="black"></StatusBar>
      <View className="border-b-[1px] border-[#ccc] flex items-center py-5">
        <Text className="text-xl font-semibold">Messsage</Text>
      </View>
      <View className="flex flex-row mt-2 justify-center ">
        {typeMessage === "personal" ? (
          <TouchableOpacity
            onPress={() => setMessageType("personal")}
            className="flex flex-row mt-2 justify-center items-center w-[150px] h-[80px] rounded-2xl shadow mr-2 bg-[#c9dfff]"
          >
            <FontAwesomeIcon icon={faCircleUser} color="#4894FE" />
            <Text className="ml-2">Personal</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setMessageType("personal")}
            className="flex flex-row mt-2 justify-center items-center w-[150px] h-[80px] rounded-2xl shadow mr-2 bg-[#fafafa]"
          >
            <FontAwesomeIcon icon={faCircleUser} color="#4894FE" />
            <Text className="ml-2">Personal</Text>
          </TouchableOpacity>
        )}
        {typeMessage === "system" ? (
          <TouchableOpacity
            onPress={() => setMessageType("system")}
            className="flex flex-row mt-2 justify-center items-center w-[150px] h-[80px] rounded-2xl shadow ml-2 bg-[#c9dfff]"
          >
            <FontAwesomeIcon icon={faBell} color="#4894FE" />
            <Text className="ml-2">System</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setMessageType("system")}
            className="flex flex-row mt-2 justify-center items-center w-[150px] h-[80px] rounded-2xl shadow ml-2 bg-[#fafafa]"
          >
            <FontAwesomeIcon icon={faBell} color="#4894FE" />
            <Text className="ml-2">System</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="mt-5 mx-7">
        {typeMessage == "personal" ? (
          <View>
            <Text>2 messages</Text>
            <PersonalMessage
              userName="Huy Le Dinh"
              content="hi friend"
              date="12/2/2024"
              seen={true}
            ></PersonalMessage>
            <PersonalMessage
              userName="Huy Dinh Le"
              content="hi friend"
              date="12/2/2025"
              seen={false}
            ></PersonalMessage>
          </View>
        ) : (
          <View>
            <Text>3 messages</Text>
            <SystemMessage
              content="hi friend"
              date="12/2/2024"
              seen={true}
            ></SystemMessage>
            <SystemMessage
              content="hi friend"
              date="12/2/2025"
              seen={false}
            ></SystemMessage>
            <SystemMessage
              content="hi friend"
              date="12/2/2025"
              seen={false}
            ></SystemMessage>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default MessageScreen;
