import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import * as Yup from "yup";

import "./BookingForm.css";

const validationForm = Yup.object({
  date: Yup.date().required("Select date please!"),
  time: Yup.string().min(1).required("Select time please!"),
  guest: Yup.number().min(1).max(10).required("Select guests number please!"),
  occasion: Yup.string().min(1).required("Select occasion please!"),
});

const initialValues = {
  date: "",
  time: "",
  guest: "",
  occasion: "",
};

const BookingForm = (props) => {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: validationForm,
    onSubmit: (values) => {
      let objDate = {
        date,
        time,
        guest,
        occasion,
      };

      objDate = values;

      console.log(objDate);

      props.dispatch();

      navigate("/confirmed");
    },
  });

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  return (
    <section id="form-reserve-table">
      <h1>Reserve a table</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          className="form-control shadow-none border-0"
          type="date"
          id="date"
          value={values.date}
          onBlur={handleBlur}
          onChange={handleChange || setDate(values.date)}
        />
        {errors.date && <small className="feedback-form">{errors.date}</small>}
        <br />
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          className="form-select shadow-none border-0"
          value={values.time}
          onBlur={handleBlur}
          onChange={handleChange || setTime(values.time)}
        >
          <option>Availabe times select...</option>
          {props.availableTimes.availableTimes.map((availableTimes) => {
            return <option key={availableTimes}>{availableTimes}</option>;
          })}
        </select>
        {errors.time && <small className="feedback-form">{errors.time}</small>}
        <br />
        <label htmlFor="guest">Number of guests</label>
        <input
          className="form-control shadow-none border-0"
          type="number"
          placeholder="Number of guests"
          min="1"
          max="10"
          id="guest"
          value={values.guest}
          onBlur={handleBlur}
          onChange={handleChange || setGuest(values.guest)}
        />
        {errors.guest && (
          <small className="feedback-form">{errors.guest}</small>
        )}
        <br />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          className="form-select shadow-none border-0"
          value={values.occasion}
          onBlur={handleBlur}
          onChange={handleChange || setOccasion(values.occasion)}
        >
          <option>Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <small className="feedback-form">{errors.occasion}</small>
        )}
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
