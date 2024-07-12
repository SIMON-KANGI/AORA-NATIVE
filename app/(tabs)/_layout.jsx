import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                style={{ tintColor: color, width: 24, height: 24 }}
            />
            <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{color:color}}>
                {name}
            </Text>
        </View>
    );
}

const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor:"'#FFA001",
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: { 
                        backgroundColor: '#161622',
                        borderTopWidth:1,
                        borderTopColor:'#232533',
                        height:84
                        },
                    tabBarIndicatorStyle: { backgroundColor: '#FFA001' },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIconStyle: { padding: 10 },
                }}
            >
                <Tabs.Screen name="home"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen name="bookmark"
                    options={{
                        title: "Bookmark",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name="Bookmark"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen name="create"
                    options={{
                        title: "Create",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    );
}

export default TabLayout;
