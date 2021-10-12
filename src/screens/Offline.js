import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Theme } from '../contexts/ThemeContext';
import { GLOBAL_STYLES } from './styles/globalStyles';

const Offline = () => {

    const { 
        theme,
    } = useContext(Theme); 
    const { colors } = theme;

    return (
        <View style={[GLOBAL_STYLES._mainContainer,{backgroundColor: colors.background}]}>
            <Text style={{color: colors.text}}>Offline</Text>
        </View>
    )
}

export default Offline

const styles = StyleSheet.create({})
