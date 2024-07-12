import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import FormField from '../../components/FormField';
import CustomButton from '../../components/customButtom'
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username:""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit =async () => {
    if(!form.email || !form.password || !form.username) {
Alert.alert('Error', 'Please fill in all required fields')
    }
    setIsSubmitting(true)
    try{
        const result=await createUser(form.email, form.password, form.username)
        router.replace('/home')
    }catch(error){
      Alert.alert('Error', error.message)
      setIsSubmitting(false)
    }finally{
      setIsSubmitting(false)
    }
  
    // API call or handle form submission here.
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full px-4 my-6 justify-center min-h-[85vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Text className="text-white text-2xl font-semibold mt-10">Log in to Aora</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
            
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />
          <CustomButton
            title="Sign Up"
            handlePress={handleSubmit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
            textStyles="text-black"
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 text-center font-pregular mt-10">
              Already have an account? 
            </Text>
            <Link href="sign-in" className="text-lg  font-psemibold text-secondary">Sign in</Link>
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
