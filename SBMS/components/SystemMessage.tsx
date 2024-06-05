import React from 'react';
import { View, Text, type ViewProps, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'



export type SystemMessageProps = ViewProps & {
    content?: string;
    date?: string;
    seen?: boolean;
  };



export function SystemMessage( {content, date, seen} : SystemMessageProps ) {
  return (
    <View className='w-full h-[50px] rounded-2xl flex flex-row items-center justify-center bg-[#fafafa] shadow my-3'>
      <FontAwesomeIcon icon={faBell} size={30}/>
      <View className='ml-2 w-[60%]'>
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
