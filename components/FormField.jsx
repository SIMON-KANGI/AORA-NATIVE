import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const FormField = ({ title, value, handleChangeText, placeholder, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledView className={`space-y-2 ${otherStyles}`}>
      <StyledText className="text-base text-gray-100">{title}</StyledText>
      <StyledView className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl flex-row items-center">
        <StyledTextInput
          className="flex-1 text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <StyledTouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="flex-row items-center"
          >
            <StyledText className="text-primary text-sm">{showPassword ? "Hide" : "Show"}</StyledText>
            <StyledImage
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 ml-2"
              resizeMode="contain"
            />
          </StyledTouchableOpacity>
        )}
      </StyledView>
    </StyledView>
  );
};

export default FormField;
