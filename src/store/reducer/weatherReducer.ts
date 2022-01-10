import {
  WeatherState,
  WeatherAction,
  GET_WEATHER,
  SET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../types/types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return state;
    case SET_WEATHER:
      console.log("dataAction", action.payload);

      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      console.log("action", action.payload);

      return {
        ...state,
        data: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
