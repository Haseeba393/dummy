import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { GLOBAL_STYLES } from './styles/globalStyles';

const Splash = ({navigation}) => {

    const _loadLocalData = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'home' }]
        })
    }

    useEffect(()=>{
        setTimeout(() => {
            _loadLocalData();
        }, 2000);
    },[])

    return (
        <View style={GLOBAL_STYLES._mainContainer}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Splash</Text>
            <ActivityIndicator 
                color={'red'}
                size={'small'}
                style={{
                    marginTop: 10,
                }}
            />
        </View>
    )
}

export default Splash;
