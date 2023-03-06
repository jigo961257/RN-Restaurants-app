import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { screenTitle } from '../utils/otherStrings'
import MapComponent from '../components/MapComponent'

const MapScreen = ({ navigation, route }) => {

    const locData = route?.params;
    console.log("locData => ", locData);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: screenTitle.MapScreenT,
        })
    }, [])

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <MapComponent locData={locData} />
            </View>
        </ScreenWrapper>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})