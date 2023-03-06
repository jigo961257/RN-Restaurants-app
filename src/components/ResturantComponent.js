import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppResource } from '../assets/AppResource'
import { colorSchema, fontColor } from '../utils/colorSchema'
import RatingComponent from './RatingComponent';
import { useNavigation } from "@react-navigation/native";
import { navStrings } from '../utils/navStrings';

const ResturantComponent = ({ data }) => {

    const navigaiton = useNavigation();
    // console.log(data);

    // const RatingComponent = () => {
    //     return (
    //         <>
    //             {
    //                 Array(5).fill(1).map((ele, ind) => {
    //                     return (
    //                         <Image source={((ind + 1) <= 4) ? AppResource.icons.starFill : AppResource.icons.starUnFill} key={ind} style={{
    //                             height: 15, width: 15,
    //                         }} />
    //                     )
    //                 })
    //             }
    //         </>
    //     )
    // }


    return (
        <View style={styles.item_container}>
            <View style={styles.item_inner_container}>
                <Image source={AppResource.image.itemImage} style={styles.item_image} />
                <View style={styles.item_content_container}>
                    <Text style={styles.item_text_style}>{data?.title || "-----"}</Text>
                    <View style={styles.item_rating_container}>
                        <RatingComponent
                            reviewCount={data?.total_review}
                            rating={data?.rating}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.item_map_container}
                    onPress={() => {
                        navigaiton.navigate(navStrings.MapScreen, { latitude: data?.latitude, longitude: data?.longitude })
                    }}
                >
                    <Image source={AppResource.icons.mapIcon} style={{
                        height: 20, width: 20,
                        resizeMode: "contain",
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResturantComponent

const styles = StyleSheet.create({
    item_container: {
        height: 95,
        backgroundColor: colorSchema.background.secondary,
        padding: 16,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    item_content_container: {

        flex: 1,
        marginLeft: 24,
        justifyContent: "center",
    },
    item_image: {
        height: "100%",
        width: 60,
        borderRadius: 4,
    },
    item_inner_container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    item_map_container: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorSchema.primary,
        borderRadius: 4,
    },
    item_rating_container: {
        flexDirection: "row",
        columnGap: 5,
        marginTop: 4,
    },
    item_text_style: {
        fontWeight: "500",
        color: fontColor.secondary,
        fontSize: 14,

    },
})