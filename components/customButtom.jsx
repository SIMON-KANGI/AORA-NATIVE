import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButtom = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    className={`bg-secondary rounded-xl min-h-[62px] 
    justify-center items-center ${containerStyles}${isLoading? 'opacity-50': ""}`}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtom