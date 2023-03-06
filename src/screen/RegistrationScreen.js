import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import { AppResource } from '../assets/AppResource';
import { colorSchema, fontColor } from '../utils/colorSchema';
import FormTextInput from '../components/FormTextInput';
import FormButton from '../components/FormButton';
import HrLine from '../components/HrLine';
import { navStrings } from '../utils/navStrings';
import { customToast } from '../utils/cutomeToast';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"
import { setUserData } from '../redux/slices/UserData';

const RegistrationScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [username, setusername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    let phoneInputRef = useRef();
    let passwordInputRef = useRef();
    let cpasswordInputRef = useRef();

    function checkRegistration() {
        if (username.length <= 0 || !username) {
            return customToast("Please Enter Username")
        } else if (phone.length <= 0 || !phone) {
            return customToast("Please Enter Phone")
        } else if (phone.length < 10 || phone.length > 10) {
            return customToast("Please Enter valid 10 digit number")
        } else if (!password) {
            return customToast("Please Enter password")
        } else if (!cpassword) {
            return customToast("Please Enter confirm password")
        } else if (password !== cpassword) {
            return customToast("Enter password is not match");
        }

        let userObj = {};
        userObj.id = nanoid();
        userObj.username = username;
        userObj.phone = phone;
        userObj.password = password;

        dispatch(setUserData(userObj));
        customToast("user registred successfully");

        setCPassword("")
        setPassword("")
        setPhone("")
        setusername("")

        navigation.navigate(navStrings.LoginScreen);
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

                    <Text style={styles.login_text}>Registration</Text>
                    <View style={styles.reg_form_container}>
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
                                ref={phoneInputRef}
                                label={"Phone"}
                                placeholder={"7621827682"}
                                text={phone}
                                setText={setPhone}
                                isSecure={false}
                                keyboardType='number-pad'
                                inputMode='decimal'
                            />
                            <FormTextInput
                                ref={passwordInputRef}
                                label={"Password"}
                                placeholder={"jigogoyani"}
                                text={password}
                                setText={setPassword}
                                isSecure={true}
                                keyboardType="default"
                            />
                            <FormTextInput
                                ref={(re) => cpasswordInputRef = re}
                                label={"Confirm Password"}
                                placeholder={"jigogoyani"}
                                text={cpassword}
                                setText={setCPassword}
                                isSecure={true}
                                keyboardType="default"
                            />
                        </View>
                        <FormButton
                            onPress={() => {
                                checkRegistration()
                            }}
                            title="Registration"

                        />
                        <HrLine />
                        <FormButton
                            title={"Login"}
                            onPress={() => {
                                navigation.navigate(navStrings.LoginScreen);
                            }}
                            btnBackColor={colorSchema.background.secondary}
                            titleColor={fontColor.app_primary_font}
                        />


                    </View>

                </ScrollView>
            </View>
        </ScreenWrapper>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    reg_form_container: {
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