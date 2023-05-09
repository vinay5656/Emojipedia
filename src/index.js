import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();

if (hour <= 9) {
  hour = "0" + hour;
}
if (minute <= 9) {
  minute = "0" + minute;
}
var date = today.getDay() + ":" + today.getMonth() + ":" + today.getFullYear();
var time = hour + ":" + minute + (today.getHours() <= 12 ? " AM" : " PM");

ReactDOM.render(
  <div className="timecss">
    <p>{time}</p>
    <p>{date}</p>
  </div>,
  document.getElementById("time")
);
ReactDOM.render(<App />, document.getElementById("root"));
