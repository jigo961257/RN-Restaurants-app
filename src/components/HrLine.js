import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorSchema } from '../utils/colorSchema'

const HrLine = () => {
    return (
        <View style={styles.hr_line} />
    )
}

export default HrLine

const styles = StyleSheet.create({
    hr_line: {
        flex: 1,
        height: 2,
        borderRadius: 1,
        backgroundColor: colorSchema.gray_htline,
        marginVertical:16,
    }
})