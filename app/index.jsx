import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images'

import CustomButtom from '../components/customButtom';
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
     <ScrollView contentContainerStyle={{height:'100%'}}>
     <View className="w-full justify-center items-center min-h-[85vh] px-4">
<Image
  source={images.logo}
  className="w-[130px] h-[84px]"
  resizeMode="contain"
  
/>
<Image
  source={images.cards}
  className="max-w-[380px] w-full h-[300px]"
  resizeMode="contain"
/>
<View className="relative mt-5">
<Text className="text-3xl text-white font-bold text-center">
  Discover Endless Opportunity {''}
  <Text className="text-secondary-200">Aora</Text>
</Text>
<Image
  source={images.path}
  className="absolute -bottom-2 -right-8 w-[136px] h-[15px] "
  resizeMode="contain"
/>
</View>
<Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:embark
 on a journey of limitless exploration with Aora</Text>
 <CustomButtom
  title="Continue with Email"
  handlePress={()=>router.push('/sign-in')}
  containerStyles="w-full mt-7"
 />
     </View>

     </ScrollView>
     <StatusBar backgroundColor='#161622' style="light"/>
    </SafeAreaView>
  );
}

