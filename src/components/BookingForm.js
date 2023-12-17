import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./BookingForm.css";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmed");
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <section id="form-reserve-table">
      <h1>Reserve a table</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          className="form-control shadow-none border-0"
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => handleChange(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          className="form-select shadow-none border-0"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option defaultValue="Availabe times select...">
            Availabe times select...
          </option>
          {props.availableTimes.availableTimes.map((availableTimes) => {
            return <option key={availableTimes}>{availableTimes}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          className="form-control shadow-none border-0"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          className="form-select shadow-none border-0"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option defaultValue="Select Occasion...">Select Occasion...</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input
          className="btn-reserve-table mt-3"
          aria-label="On Click"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </section>
  );
};

export default BookingForm;
