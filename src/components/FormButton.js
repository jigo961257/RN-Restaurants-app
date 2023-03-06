import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colorSchema, fontColor } from '../utils/colorSchema'

interface FormButtonProps {
    title: String | null,
    onPress(): void | Function,
    titleColor?: String | null,
    btnBackColor?: String | null,
}

const FormButton = (props: FormButtonProps) => {

    const { onPress, title, btnBackColor, titleColor } = props;

    return (
        <TouchableOpacity style={[styles.button_contianer,
        { backgroundColor: btnBackColor || colorSchema.primary }]}
            onPress={() => {
                if (onPress) {
                    onPress()
                }
            }}
        >
            <Text style={[styles.btn_text, {
                color:
                    titleColor || fontColor.primary
            }]}>{title || "btnTitle"}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    button_contianer: {
        height: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        shadowColor:"#000",
        elevation:4,
    },
    btn_text: {
        fontWeight: "700",
        fontSize: 18,
    },
})