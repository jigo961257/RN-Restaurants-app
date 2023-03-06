import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ResturantComponent from '../components/ResturantComponent'
import ScreenWrapper from '../components/ScreenWrapper'
import { getRestList } from '../redux/slices/RestApiData'
import { colorSchema } from '../utils/colorSchema'
import { screenTitle } from '../utils/otherStrings'

const ResListScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const restList = useSelector((state) => state.rest.list);
    const isRestLoading = useSelector((state) => state.rest.isLoading);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: screenTitle.ResturantScreenT,
        })
    }, [])

    useEffect(() => {
        dispatch(getRestList())
    }, [dispatch])

    // console.log("restList => ", restList);

    const renderRestaruantList = ({ item, index }) => {
        return (
            <View key={index}>
                <ResturantComponent data={item} />
            </View>
        )
    }

    return (
        <ScreenWrapper>
            {isRestLoading ?
                <View style={styles.loading_contianer}>
                    <ActivityIndicator size={"large"} color={colorSchema.primary} />
                </View>
                :
                <View style={styles.contentContainer}>
                    <FlatList
                        // data={Array(4).fill(1)}
                        data={restList}
                        renderItem={renderRestaruantList}
                        keyExtractor={item => item?.id.toString()}
                        contentContainerStyle={{
                            padding: 16,
                        }}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 8, }} />
                        )}
                    />
                </View>
            }
        </ScreenWrapper>
    )
}

export default ResListScreen

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    loading_contianer: {
        flex: 1, justifyContent: "center",
        alignItems: "center",
    },
})