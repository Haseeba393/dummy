import React, { createContext, useState } from 'react';
import { LIGHT_THEME, DARK_THEME } from '../config/themes';

// Defining context
export const Theme = createContext({
    theme: LIGHT_THEME,
    _toggleTheme: (theme) => {},
});

const ThemeContext = ({children}) => {

    // States
    const [theme, setTheme] = useState(LIGHT_THEME);

    /**
     * Function to toggle between themes
     * @param {string} theme 
     */
    const _toggleTheme = async (theme) => {
        if(theme === 'light'){
            setTheme(LIGHT_THEME);
        }
        else{
            setTheme(DARK_THEME);
        }
    }

    return(
        <Theme.Provider
            value={{
                theme: theme,
                _toggleTheme: _toggleTheme,
            }}
        >
            {children}
        </Theme.Provider>
    );
}

export default ThemeContext;