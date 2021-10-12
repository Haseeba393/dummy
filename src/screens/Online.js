import React, { useContext } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Theme } from '../contexts/ThemeContext';
import { GLOBAL_STYLES } from './styles/globalStyles';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Tab1, Tab2 } from '.';

const Online = () => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'tab1', title: 'First' },
        { key: 'tab2', title: 'Second' },
    ]);

    const { 
        theme,
    } = useContext(Theme); 
    const { colors } = theme;

    const renderScene = SceneMap({
        tab1: Tab1,
        tab2: Tab2,
    });

    return (
        <View style={[{flex: 1, padding: 20,backgroundColor: colors.background}]}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    )
}

export default Online

const styles = StyleSheet.create({})
