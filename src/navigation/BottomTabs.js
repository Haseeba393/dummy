import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    Online,
    Offline,
    Settings 
} from '../screens';
import { Theme } from '../contexts/ThemeContext';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {

    const { 
        theme,
    } = useContext(Theme); 
    const { colors } = theme;

    return (
        <Tabs.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.background
                },
                headerTitleStyle:{
                    color: colors.text
                },
                tabBarStyle:{
                    backgroundColor: colors.background
                },
                tabBarLabelStyle:{
                    color: colors.text
                },
            }}
        >
            <Tabs.Screen
                name='online'
                component={Online}
            />
            <Tabs.Screen
                name='offline'
                component={Offline}
            />
            <Tabs.Screen
                name='settings'
                component={Settings}
            />
        </Tabs.Navigator>
    )
}

export default BottomTabs;