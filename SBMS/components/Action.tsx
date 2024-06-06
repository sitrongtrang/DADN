import React from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons/faNoteSticky'


export type ActionProps = ViewProps & {
    content?: string;
    date?: string;
    time?: string;
  };


export function Action( {content, date, time} : ActionProps ) {
  return (
    <View className='w-full h-[50px] rounded-2xl flex flex-row items-center justify-center bg-[#fafafa] shadow my-3'>
      <FontAwesomeIcon icon={faNoteSticky} size={30}/>
      <View className='ml-2 w-[60%]'>
        <Text>{content}</Text>
      </View>
      <View>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
    </View>
    
  );
}
