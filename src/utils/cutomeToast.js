import { ToastAndroid } from "react-native"

export const customToast = (mag = null) => {
    return ToastAndroid.show(
        mag?mag:"empty tost",
        ToastAndroid.SHORT,
    )
}