import { call, put, takeEvery } from "redux-saga/effects";
import { GET_WEATHER, GetWeatherAction, apiResponse } from "../types/types";
import { getWeatherSuccess, setError } from "../action/weatherAction";
import axios from "axios";

function getApi(city: string): Promise<apiResponse> {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e183093be7786766553ab1b624826f6c`;
  return axios.get(apiUrl);
}

function* fetchWeather(action: GetWeatherAction) {
  try {
    const weatherData: apiResponse = yield call(getApi, action.payload);
    yield put(getWeatherSuccess(weatherData.data));
  } catch (e: any) {
    yield put(setError(e?.message));
  }
}

function* weatherSaga() {
  yield takeEvery(GET_WEATHER, fetchWeather);
}

export default weatherSaga;
