import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/index";
import { setAlert } from "./store/action/alert";
import { setError } from "./store/action/weatherAction";
import Weather from "./components/Weather";
import Alert from "./components/Alert";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="App">
      <Search title="Enter city name and press search button" />
      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}

      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && (
        <Alert message={error} onClose={() => dispatch(setError(" "))} />
      )}
    </div>
  );
}

export default App;
