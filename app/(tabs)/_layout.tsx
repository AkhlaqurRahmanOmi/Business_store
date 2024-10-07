import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{
                headerShown: false,
                tabBarLabel: "Home", 
                tabBarIcon: ({ color }) => 
                <MaterialCommunityIcons name="home-circle" size={24} color={color} />
            }} />
            <Tabs.Screen name='explore' options={{
                headerShown: false,
                tabBarLabel: "Explore",
                tabBarIcon: ({ color }) =>
                    <MaterialCommunityIcons name="shield-search" size={24} color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                headerShown: false,
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) =>
                    <MaterialCommunityIcons name="account" size={24} color={color} />
            }} />
        </Tabs>
    )
}

export default TabLayout