import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import { colorSchema, fontColor } from '../utils/colorSchema';

interface FormTextInputProps {
    label?: String | null | undefined,
    setText?: void | Function | null,
    text?: String | null | undefined,
    placeholder?: String | undefined,
    isSecure?: Boolean | undefined,
    keyboardType?: "number-pad" | "default" | "email-address",
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    onRef(): void | Function | Object | null,
    onSubmitingEnd?: Object | String | null,
    blurInSubmit?: Boolean | String | null,
    returnKeyType?: 'none' | 'previous' | 'done' | 'go' | 'next' | 'search' | 'send', // only for android
}

const FormTextInput = (props: FormTextInputProps) => {

    const { label, setText, text, placeholder, isSecure, inputMode,
        keyboardType, blurInSubmit, onSubmitingEnd, onRef, returnKeyType } = props;

    return (
        <View style={{ marginVertical: 8, }}>
            <Text style={styles.label_text_style}>{label || "untitled"}</Text>
            <TextInput
                placeholder={placeholder || "placeholder"}
                style={styles.text_input_style}
                value={text || ""}
                onChange={(value) => {
                    if (setText) {
                        setText(value.nativeEvent.text);
                    }
                }}
                secureTextEntry={isSecure ? isSecure : false}
                inputMode={inputMode ? inputMode : "none"}
                keyboardType={keyboardType ? keyboardType : "default"}
                ref={onRef}
                onSubmitEditing={onSubmitingEnd ? onSubmitingEnd : () => { }}
                blurOnSubmit={blurInSubmit ? blurInSubmit : false}
                returnKeyType={returnKeyType ? returnKeyType : "done"}
            />
        </View>
    )
}

export default FormTextInput

const styles = StyleSheet.create({
    label_text_style: {
        fontWeight: "700",
        color: "#000",
        fontSize: 14,
    },
    text_input_style: {
        fontWeight: "600",
        fontSize: 14,
        color: fontColor.app_primary_font,
        borderBottomWidth: 1,
        borderBottomColor: colorSchema.primary
    },

})