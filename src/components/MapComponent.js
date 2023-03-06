import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import { AppResource } from '../assets/AppResource';
import { colorSchema } from '../utils/colorSchema';
import { getCurrentLocaiton, locationPermission } from '../utils/helperFunction';


const MapComponent = ({ locData }) => {
    // console.log("locData => ", locData);

    const [itemCoords, setItemCoords] = useState({})
    const [currentCcoords, setCurrentCoords] = useState({});

    useEffect(() => {
        getLiveLocaiton();
        setItemCoords(locData);
    }, [locData]);

    async function getLiveLocaiton() {
        const locationPer = await locationPermission();
        console.log("locationPer => ", locationPer);
        if (locationPer === "granted") {
            const res = await getCurrentLocaiton()
            console.log("res => ", res);
            setCurrentCoords(res)
            // setCurrentCoords(res)
        }
    }

    const CustomeMarker = () => {
        return (
            <Image source={AppResource.icons.shopPin} style={{
                height: 40, width: 40,
                resizeMode: "contain"
            }} />
        )
    }

    return (
        <>
            {currentCcoords.hasOwnProperty("latitude") && currentCcoords.hasOwnProperty("longitude") ?
                <MapView
                    style={{
                        flex: 1,
                    }}
                    initialRegion={{
                        latitude: currentCcoords?.latitude,
                        longitude: currentCcoords?.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                >
                    {locData ?
                        <>
                            <Marker
                                coordinate={{
                                    latitude: +itemCoords.latitude,
                                    longitude: +itemCoords.longitude
                                }}
                            // image={AppResource.icons.shopPin}
                            >
                                <CustomeMarker {...Marker} />
                                <Callout
                                // tooltip={true}
                                >
                                    <View style={styles.marker_container}>
                                        <Text>Restaurant Name</Text>
                                    </View>
                                </Callout>
                            </Marker>

                            <Marker
                                coordinate={{
                                    latitude: currentCcoords?.latitude,
                                    longitude: currentCcoords?.longitude,
                                }}

                            >
                                <View style={styles.current_loc_marker_contianer}>
                                    <View style={styles.current_loc_marker_contianer_inner} />
                                </View>
                            </Marker>
                            <Polyline
                                coordinates={[
                                    {
                                        latitude: currentCcoords?.latitude,
                                        longitude: currentCcoords?.longitude,
                                    },
                                    {
                                        latitude: +itemCoords.latitude,
                                        longitude: +itemCoords.longitude
                                    },
                                ]}
                                strokeColor={colorSchema.black}
                                strokeWidth={5}
                            />
                        </>
                        : null}
                </MapView>
                :
                <View style={styles.loading_container}>
                    <ActivityIndicator size={'large'} color={colorSchema.primary} />
                </View>
            }
        </>
    )
}

export default MapComponent

const styles = StyleSheet.create({
    current_loc_marker_contianer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: colorSchema.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    current_loc_marker_contianer_inner: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colorSchema.background.secondary,
    },
    loading_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    marker_container: {
        height: 50,
        width: 150,
        padding: 8,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
    }
})