import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorSchema } from '../utils/colorSchema'

const ScreenWrapper = ({ children }) => {
    return (
        <>
            <StatusBar backgroundColor={colorSchema.primary} />
            {Platform.OS == "ios" ?
                <SafeAreaView style={styles.contianer}>
                    {children}
                </SafeAreaView>
                :
                <View style={styles.contianer}>
                    {children}
                </View>
            }
        </>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: colorSchema.background.primary,
    }
})