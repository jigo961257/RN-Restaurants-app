import { call, put, takeEvery } from "redux-saga/effects";
import { API_ROUTE } from "../utils/otherStrings";
import { getRestSuccess } from "./slices/RestApiData";

function* workGetRestaruantList() {

    const rest = yield call(() => fetch(API_ROUTE));
    // console.log("rest => ", yield rest.json());
    const restFormatedData = yield rest.json();
    // const restFormatedData = {};
    yield put(getRestSuccess(restFormatedData?.data));

}

function* resSaga() {
    yield takeEvery('rest/getRestList', workGetRestaruantList)
}

export default resSaga;