import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AppResource } from './src/assets/AppResource'
import { LOGINSCREEN, MAPSCREEN, REGISTRATIONSCREEN, RESTAURANTSCREEN, SETTINGSCREEN, SPLASHSCREEN } from './src/screen/Screen'
import SettingScreen from './src/screen/SettingScreen'
import { colorSchema, fontColor } from './src/utils/colorSchema'
import { navStrings } from './src/utils/navStrings'
import { screenTitle, TabsName } from './src/utils/otherStrings'


const Stack = createNativeStackNavigator()
const BottomStack = createBottomTabNavigator()
const AppNavigation = () => {

    // const navigation = useNavigation();


    const MainFlow = () => {
        return (
            <BottomStack.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colorSchema.primary
                }}
            >
                <BottomStack.Screen
                    component={RESTAURANTSCREEN} name={navStrings.ResturantScreen}
                    options={{
                        headerStyle: { backgroundColor: colorSchema.primary },
                        headerTitleStyle: { color: fontColor.primary },
                        headerTitleAlign: "center",
                        title: TabsName.ResturantTab,
                        tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
                        tabBarIcon: (({ color, focused, size }) => {
                            return (
                                <Image source={AppResource.icons.listTabIcon} style={{
                                    height: 20, width: 20,
                                    tintColor: color,
                                }} />
                            )
                        }),
                    }}
                />
                <BottomStack.Screen
                    component={MAPSCREEN} name={navStrings.MapScreen}
                    options={{
                        headerStyle: { backgroundColor: colorSchema.primary },
                        headerTitleStyle: { color: fontColor.primary },
                        headerTitleAlign: "center",
                        title: TabsName.Map,
                        tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
                        tabBarIcon: (({ color, focused, size }) => {
                            return (
                                <Image source={AppResource.icons.mapTabIcon} style={{
                                    height: 20, width: 20,
                                    tintColor: color,
                                }} />
                            )
                        })
                    }}


                />
                <BottomStack.Screen
                    component={SettingScreen} name={navStrings.SettingScreen}
                    options={{
                        headerStyle: { backgroundColor: colorSchema.primary },
                        headerTitleStyle: { color: fontColor.primary },
                        headerTitleAlign: "center",
                        title: TabsName.Setting,
                        tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
                        tabBarIcon: (({ color, focused, size }) => {
                            return (
                                <Image source={AppResource.icons.settingIcon} style={{
                                    height: 20, width: 20,
                                    tintColor: color,
                                }} />
                            )
                        })
                    }}


                />
            </BottomStack.Navigator>
        )
    }

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={navStrings.SplashScreen}>
                <Stack.Screen component={SPLASHSCREEN} name={navStrings.SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen component={LOGINSCREEN} name={navStrings.LoginScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen component={REGISTRATIONSCREEN} name={navStrings.RegistrationScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen component={MainFlow} name={navStrings.MainFlow} options={{
                    headerShown: false,
                }} />
                <Stack.Screen component={SETTINGSCREEN} name={navStrings.SettingScreen} options={{
                    headerStyle: { backgroundColor: colorSchema.primary },
                    headerTitleStyle: { color: fontColor.primary },
                    headerTitleAlign: "center",
                    title: screenTitle.Setting,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})