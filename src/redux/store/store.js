import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import RestApiData from "../slices/RestApiData"
import restSaga from "../sagas";
// import storage from "redux-persist/lib/storage";
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"
import UserData from "../slices/UserData";
// for the localstorage
const persisConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
}

const reducer = combineReducers({
    rest: RestApiData,
    user: UserData,
})

const persisteReducer = persistReducer(persisConfig, reducer)

const sagaMiddl = createSagaMiddleware()

export const store = configureStore({
    reducer: persisteReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(sagaMiddl),
})

sagaMiddl.run(restSaga)

// export default store;
