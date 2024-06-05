import React from 'react';
import { View, Text, type ViewProps, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'



export type PersonalMessageProps = ViewProps & {
    userName?: string;
    content?: string;
    date?: string;
    seen?: boolean;
  };



export function PersonalMessage( {userName, content, date, seen} : PersonalMessageProps ) {
  return (
    <View className='w-full h-[50px] rounded-2xl flex flex-row items-center justify-center bg-[#fafafa] shadow my-3'>
      <FontAwesomeIcon icon={faCircleUser} size={30}/>
      <View className='ml-2 w-[60%]'>
        <Text className='font-semibold'>{userName}</Text>
        <Text>{content}</Text>
      </View>
      <View>
        <Text>{date}</Text>
        <View className='flex items-end'>
          {
            seen ?
            <FontAwesomeIcon icon={faCircle} size={10} color='#4894FE'/>
            :
            <View></View>
          }
        </View>
        
      </View>
    </View>
    
  );
}
