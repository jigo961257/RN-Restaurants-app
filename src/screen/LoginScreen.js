import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { AppResource } from '../assets/AppResource'
import { colorSchema, fontColor } from '../utils/colorSchema'
import FormTextInput from '../components/FormTextInput'
import FormButton from '../components/FormButton'
import HrLine from '../components/HrLine'
import { navStrings } from '../utils/navStrings'
import { useDispatch, useSelector } from "react-redux";
import { customToast } from '../utils/cutomeToast'
import { setUSerLogedIn, setUsetLoggindId } from '../redux/slices/UserData'
import { delay } from '../utils/helperFunction'

const LoginScreen = ({ navigation }) => {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const storeUData = useSelector((state) => state.user.user);

    async function checkLogin() {
        if (username.length <= 0 || !username) {
            return customToast("Please Enter Username")
        } else if (!password) {
            return customToast("Please Enter password")
        }

        let userFind = storeUData.find(item => item.username == username)
        if (userFind == undefined) {
            return customToast("user not existe please registerd!")
        } else {
            if (userFind.password == password) {
                dispatch(setUSerLogedIn(true))
                customToast("user login successfully")
                setPassword("");
                setusername("");
                dispatch(setUsetLoggindId(userFind?.id))
                await delay(2000);
                navigation.navigate(navStrings.MainFlow)

            } else {
                return customToast("credentials not match!")
            }
        }

    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{
                        padding: 16,
                    }}
                >
                    <Image source={AppResource.image.itemImage}
                        style={styles.screen_img}
                    />

                    <Text style={styles.login_text}>Login</Text>

                    <View style={styles.login_form_container}>
                        <View style={{
                            marginBottom: 16,
                        }}>
                            <FormTextInput
                                label={"Username"}
                                placeholder={"jigogoyani"}
                                text={username}
                                setText={setusername}
                                isSecure={false}
                                keyboardType='default'
                            />
                            <FormTextInput
                                label={"Password"}
                                placeholder={"jigogoyani"}
                                text={password}
                                setText={setPassword}
                                isSecure={true}
                                keyboardType="default"
                            />
                        </View>
                        <FormButton
                            title={"Login"}
                            onPress={() => {
                                // navigation.navigate(navStrings.MainFlow)
                                checkLogin()
                            }}
                        />

                        <HrLine />

                        <FormButton
                            onPress={() => {
                                navigation.navigate(navStrings.RegistrationScreen)
                            }}
                            title="Registration"
                            btnBackColor={colorSchema.background.secondary}
                            titleColor={fontColor.app_primary_font}
                        />
                    </View>
                </ScrollView>
            </View>
        </ScreenWrapper>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    login_form_container: {
        marginTop: 24,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    login_text: {
        fontWeight: "800",
        fontSize: 28,
        color: fontColor.app_primary_font,
        textAlign: "center",
        fontStyle: "italic",
    },
    screen_img: {
        height: 80,
        width: 80,
        borderRadius: 8,
        alignSelf: "center",
        marginTop: 24,
    }
})