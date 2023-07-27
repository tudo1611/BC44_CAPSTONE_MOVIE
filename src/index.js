import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import userSlice from "./redux/userSlice";
import spinnerSlice from "./redux/spinnerSlice";
import movieSlice from "./redux/movieSlice";
import setBooking from "./redux/bookingSlice";
import setDetail from "./redux/detailSlice";
import setUserRegis from "./redux/regisSlice";
import selectItem from "./redux/selectItemSlice";
import deselectItem from "./redux/selectItemSlice";
import setHTR from "./redux/setArrHTRSlice";
import setTicketBooking from "./redux/ticketBookingSlice";
import setHistoryBooking from "./redux/historyBookingSlice";
import setTabsActive from "./redux/historyBookingSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
export let store = configureStore({
  reducer: {
    userSlice: userSlice,
    spinnerSlice,
    setBooking,
    movieSlice,
    setDetail,
    setUserRegis,
    selectItem,
    deselectItem,
    setHTR,
    setTicketBooking,
    setHistoryBooking,
    setTabsActive,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
