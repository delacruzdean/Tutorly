import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const TabIcon = ({ focused, icon }: any) => {
    if(focused){
    return (
        <ImageBackground
            source={images.focus}
            className="flex flex-row w-full flex-1 min-w-[72px] min-h-10 mt-5 justify-center items-center" 
        >
            <Image source={icon}
                 className="size-10" />

        </ImageBackground>
    );
}
    return (
        <View className="size-full justify-center items-center mt-10 rounded-full" >
            <Image source={icon}
                 className="size-10" />
        </View>
    );
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: '#47AA9C',
                height: 100,
                
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} 
                    icon={icons.home}/>
                )
        }}
        />
        <Tabs.Screen
            name="calendar"
            options={{
                title: 'Calendar',
                headerShown: false,
                tabBarIcon:({ focused }) => (
                    <TabIcon focused={focused} 
                    icon={icons.calendar}/>
                )
        }}
        />
        <Tabs.Screen
            name="post"
            options={{
                title: 'Post',
                headerShown: false,
                tabBarIcon:({ focused }) => (
                    <TabIcon focused={focused} 
                    icon={icons.post}/>
                )
        }}
        />
        <Tabs.Screen
            name="inbox"
            options={{
                title: 'Inbox',
                headerShown: false,
                tabBarIcon:({ focused }) => (
                    <TabIcon focused={focused} 
                    icon={icons.inbox}/>
                )
        }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon:({ focused }) => (
                    <TabIcon focused={focused} 
                    icon={icons.profile}/>
                )
        }}
        />
    </Tabs>
  )
}

export default _layout