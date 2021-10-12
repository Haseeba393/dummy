import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Theme } from '../contexts/ThemeContext';


const DATA = [
    {
        key: 0,
        title: 'Music'
    },
    {
        key: 1,
        title: 'Music'
    },
    {
        key: 2,
        title: 'Music'
    },
    {
        key: 3,
        title: 'Music'
    },
    {
        key: 4,
        title: 'Music'
    },
    {
        key: 0,
        title: 'Music'
    },
    {
        key: 1,
        title: 'Music'
    },
    {
        key: 2,
        title: 'Music'
    },
    {
        key: 3,
        title: 'Music'
    },
    {
        key: 4,
        title: 'Music'
    },
    {
        key: 0,
        title: 'Music'
    },
    {
        key: 1,
        title: 'Music'
    },
    {
        key: 2,
        title: 'Music'
    },
    {
        key: 3,
        title: 'Music'
    },
    {
        key: 4,
        title: 'Music'
    },
    {
        key: 0,
        title: 'Music'
    },
    {
        key: 1,
        title: 'Music'
    },
    {
        key: 2,
        title: 'Music'
    },
    {
        key: 3,
        title: 'Music'
    },
    {
        key: 4,
        title: 'Music'
    }
]

const Tab1 = () => {

    const { 
        theme,
    } = useContext(Theme); 
    const { colors } = theme;

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <FlatList 
                numColumns={'2'}
                style={{
                    flexGrow: 1,
                }}
                showsVerticalScrollIndicator={false}
                data={DATA}
                keyExtractor={item => item.key.toString()}
                renderItem={({item, index})=>{
                    return(
                        <View style={{ width: '45%', height: 140, margin: 8, borderRadius: 10, backgroundColor: '#d7d7d7'}}>
                            <Image 
                                source={require('../assets/maxresdefault.jpeg')}
                                resizeMode='cover'
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 10,
                                }}
                            />
                            <View style={{padding: 10,}}>
                                <Text style={{color: '#000'}}>{item.title}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default Tab1

const styles = StyleSheet.create({})
