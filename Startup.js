import React from 'react'
import Root from './src/navigation/Root';
import { NavigationContainer } from '@react-navigation/native';
import ThemeContext from './src/contexts/ThemeContext';

const Startup = () => {
    return (
        <ThemeContext>
            <NavigationContainer>
                <Root />
            </NavigationContainer>
        </ThemeContext>
    )
}

export default Startup;