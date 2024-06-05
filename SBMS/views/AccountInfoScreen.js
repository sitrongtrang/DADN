import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    TextInput,
  } from "react-native";
import {React, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'


  const AccountInfoScreen = () => {
    const [fullname, setFullname] = useState('Doraemon');
    const [email, setEmail] = useState('sbms@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [phone, setPhone] = useState('0123456789');
    const [region, setRegion] = useState('Việt Nam');

    return (
      <SafeAreaView className="flex-1 bg-white mb-[70]">
        <StatusBar barStyle={"opaque"} backgroundColor="black"></StatusBar>
        <View className="border-b-[1px] border-[#ccc] flex flex-row items-center justify-between p-5">
            <TouchableOpacity>
              <FontAwesomeIcon icon={faAngleLeft} />
            </TouchableOpacity>
            <Text className="text-xl font-semibold">Account Info</Text>
            <View></View>
        </View>
        <View className="bg-[#fafafa] flex px-5 py-2 mx-5 rounded-3xl shadow mt-[40px]">
            <View className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
                <Text>Full name:</Text>
                <TextInput
                    value={fullname}
                    onChangeText={setFullname}
                />
            </View>
            <View className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
                <Text>Email:</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
                <Text>Password:</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View className="border-b-[1px] border-[#ccc] w-full p-3 flex flex-row items-center justify-between">
                <Text>Phone:</Text>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>
            <View className="w-full p-3 flex flex-row items-center justify-between">
                <Text>Region:</Text>
                <TextInput
                    value={region}
                    onChangeText={setRegion}
                />
            </View>
        </View>
      </SafeAreaView>
    );
  }
  export default AccountInfoScreen;
