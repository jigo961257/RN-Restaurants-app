import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppResource } from '../assets/AppResource'

const RatingComponent = ({rating, reviewCount}) => {
    const rate = Math.round(rating);
    // console.log("rate => ", rate, " rating => ", rating);
    return (
        <View style={styles.rating_contianer}>
            {
                Array(5).fill(1).map((ele, ind) => {
                    return (
                        <Image source={((ind + 1) <= rate) ? AppResource.icons.starFill : AppResource.icons.starUnFill} key={ind} style={{
                            height: 15, width: 15,
                        }} />
                    )
                })
            }
            <Text style={styles.rating_text}>{`(${reviewCount || 0})`}</Text>
        </View>
    )

}

export default RatingComponent

const styles = StyleSheet.create({
    rating_contianer:{
        flexDirection:"row",
        columnGap:4,
    },
    rating_text:{
        fontWeight:"600",
        fontSize:12,
        color:"#00000055",
    }
})