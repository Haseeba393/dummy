import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { LIGHT_THEME } from '../config/themes';
import { Theme } from '../contexts/ThemeContext';
import { GLOBAL_STYLES } from './styles/globalStyles';

const Settings = () => {

    const { 
        theme,
        _toggleTheme 
    } = useContext(Theme); 
    const { colors } = theme;
    const [isEnabled, setIsEnabled] = useState(theme == LIGHT_THEME ? false : true);
    
    const toggleSwitch = (value) => {
        if(value){
            _toggleTheme('dark');
            setIsEnabled(true);
        }
        else{
            _toggleTheme('light');
            setIsEnabled(false);
        }
    };

    return (
        <View style={[GLOBAL_STYLES._mainContainer,{backgroundColor: colors.background}]}>
            <Text style={{color: colors.text}}>Settings</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})
