import React, { useReducer } from "react";

//React Router DOM
import { Route, Routes } from "react-router-dom";

//Components
import BookingPage from "./BookingPage";
import BookingConfirmed from "./BookingConfirmed";

import "./Main.css";

const Main = () => {
  const seedRandom = function (seed) {
    let m = 2 ** 35 - 31;

    let a = 185852;

    let s = seed % m;

    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
    }
    return result;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };

  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  return (
    <main>
      <Routes>
        <Route
          path="/bookingPage"
          element={<BookingPage availableTimes={state} dispatch={dispatch} />}
        />
        <Route path="/confirmed" element={<BookingConfirmed />} />
      </Routes>
    </main>
  );
};

export default Main;
