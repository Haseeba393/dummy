import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Splash, 
} from '../screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator
            initialRouteName='splash'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='splash'
                component={Splash}
            />
            <Stack.Screen
                name='home'
                component={BottomTabs}
            />
        </Stack.Navigator>
    )
}

export default Root;