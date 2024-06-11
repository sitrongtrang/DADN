import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    TextInput,
  } from "react-native";
import {React, useState, useEffect, useContext} from "react";
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { AuthContext } from '../context/AuthContext';
import axios from "axios";

  const AccountInfoScreen = () => {
    const navigation = useNavigation();
    const { token } = useContext(AuthContext);
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [region, setRegion] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/user/profile",{
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status >=200 && response.status<400) {
                console.log(response.data.message);
                const user = response.data.user
                setEmail(user.email)
                setFullname(user.fullname)
                setPhone(user.phone)
                setRegion(user.region)
            
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Token is invalid
                // Clear the token and navigate to the login screen
                setToken(null); // Clear the token from state or storage
                navigation.navigate("Login"); // Navigate to the login screen
            } else {
                console.error("Error fetching user data", error);
            }
        }
        finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchData();
      }, []);
    
    // if (loading) {
    //     return (
    //         <View style={styles.loadingContainer}>
    //         <ActivityIndicator size="large" color="#0000ff" />
    //         </View>
    //     );
    // }

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
