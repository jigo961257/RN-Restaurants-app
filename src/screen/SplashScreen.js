import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colorSchema, fontColor } from '../utils/colorSchema'
import { AppResource } from '../assets/AppResource'
import { useNavigation } from "@react-navigation/native"
import { navStrings } from '../utils/navStrings'
import { useSelector } from "react-redux"

const SplashScreen = () => {

    const navigation = useNavigation()

    const loggedId = useSelector((state) => state.user.loggedId);

    useEffect(() => {
        setTimeout(() => {
            if (loggedId == null || loggedId == undefined) {

                navigation.navigate(navStrings.LoginScreen)
            } else {
                navigation.navigate(navStrings.MainFlow)
            }
        }, 3000);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={AppResource.image.itemImage}
                style={{
                    height: 80, width: 80,
                    borderRadius: 8,
                }}
            />
            <Text style={styles.text}>MapMarker</Text>
            <ActivityIndicator size={"large"} color={colorSchema.background.primary} style={{
                position: "absolute", bottom: 16,
            }} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorSchema.primary,
    },
    text: {
        marginTop: 8,
        fontWeight: "700",
        fontSize: 25,
        color: fontColor.primary
    }
})