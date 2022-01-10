import {
  WeatherAction,
  SetErrorAction,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../types/types";

export const getWeather = (city: string): WeatherAction => {
  return {
    type: GET_WEATHER,
    payload: city,
  };
};

export const getWeatherSuccess = (data: WeatherData): WeatherAction => {
  return {
    type: SET_WEATHER,
    payload: data,
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (error: string): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
