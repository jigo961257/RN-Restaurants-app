import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { colorSchema, fontColor } from '../utils/colorSchema'
import { customToast } from '../utils/cutomeToast'
import { navStrings } from '../utils/navStrings'
import { useDispatch, useSelector} from "react-redux"
import { deleteUSer } from '../redux/slices/UserData'

const SettingScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const loggedId = useSelector((state) => state.user.loggedId);

    function deleteAccount() {
        Alert.alert("Delete Account", "Are you sure delete Account!. all data will be erase.",
            [
                {
                    text: "cancel",
                    style: "cancel",
                },
                {
                    text: "delete",
                    style: "destructive",
                    onPress: () => {
                        customToast("account delete successfully");
                        dispatch(deleteUSer(loggedId))
                        navigation.navigate(navStrings.LoginScreen)
                    }
                }
            ])
    }

    function userLogout() {
        Alert.alert("Logout", "Are you sure want logout.",
            [
                {
                    text: "cancel",
                    style: "cancel",
                },
                {
                    text: "logout",
                    style: "destructive",
                    onPress: () => {
                        customToast("user logout successfully");
                        navigation.navigate(navStrings.LoginScreen)
                    }
                }
            ])
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={styles.user_logo_container}>
                    <Text style={styles.text_style}>J</Text>
                </View>

                <View style={styles.user_content}>
                    <Text style={styles.username_text}>Jigogoyani</Text>
                    <Text style={styles.phone_text}>+91 76218 27682</Text>
                </View>

                <TouchableOpacity style={styles.logout_container}
                    onPress={() => {
                        if (userLogout) {
                            userLogout()
                        }
                    }}
                >
                    <Text style={styles.logout_text}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.delete_acc}
                    onPress={() => {
                        if (deleteAccount) {
                            deleteAccount()
                        }
                    }}
                >
                    <Text style={styles.delete_acc_text}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    delete_acc: {
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: "red",
        paddingVertical: 8,
    },
    delete_acc_text: {
        fontSize: 16,
        color: "red",
        fontWeight: 'bold',
    },
    logout_container: {
        marginTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: colorSchema.primary,
        paddingVertical: 8,
    },
    logout_text: {
        fontSize: 16,
        color: fontColor.app_primary_font,
        fontWeight: 'bold',
    },
    phone_text: {
        fontSize: 16,
        color: fontColor.app_primary_font,
        fontWeight: '500',
        marginTop: 4,
    },
    text_style: {
        fontSize: 35,
        color: fontColor.primary,
        fontWeight: 'bold',

    },
    user_content: {
        alignItems: "center",
        marginTop: 16,
    },
    user_logo_container: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: colorSchema.primary,
        justifyContent: "center", alignItems: "center",
        alignSelf: "center",
    },
    username_text: {
        fontSize: 16,
        color: fontColor.secondary,
        fontWeight: 'bold',
    },
})