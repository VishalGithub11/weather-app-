import React, { FC, useState, FormEvent } from "react";
import { setAlert } from "../store/action/alert";
import { getWeather, setLoading } from "../store/action/weatherAction";

import { useDispatch } from "react-redux";

interface Props {
  title: string;
}

const Search = ({ title }: Props) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">{title}</h1>
        <form className="py-5" onSubmit={submitHandler}>
          <input
            type="text"
            className="input has-text-centered mb-2"
            placeholder="Enter city name"
            style={{ maxWidth: 300 }}
            value={city}
            onChange={changeHandler}
          />
          <button
            className="button is-primary is-fullwidth"
            style={{ maxWidth: 300, margin: "0 auto" }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
