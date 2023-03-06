import { PermissionsAndroid } from "react-native"
import GetLocation from "react-native-geolocation-service";

export const locationPermission = () => new Promise(async (resolve, reject) => {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // {
        //     title: "Location",
        //     message: "need permisson for location",
        //     buttonPositive: "Okay",
        //     buttonNegative: "Not"
        // }
    )
        .then((res) => {
            if (res === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("permission granted");
                resolve('granted')
            }
            return reject("Location permission not granted")
        })
        .catch((er) => {
            console.log("error getPermisison => ", er);
            return reject(er)
        })
})

export const getCurrentLocaiton = () => new Promise((resolve, reject) => {
    GetLocation.getCurrentPosition(
        position => {
            const coord = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }

            resolve(coord)
        },
        error => {
            reject(error.message)
        },
        { enableHighAccuracy: true, timeout: 16000, maximumAge: 10000 },
    )
})

export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);