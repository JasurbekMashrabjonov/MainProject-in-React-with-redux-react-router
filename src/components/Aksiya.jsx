import React, { useEffect, useState } from "react";
import "../styles/Aksiya.css";
import "../styles/all.css";
function Aksiya(props) {
  const [saleDay, setSaleDay] = useState("");
  const [saleHours, setSaleHours] = useState("");
  const [saleMinutes, setSaleMinutes] = useState("");
  const [saleSeconds, setSaleSeconds] = useState("");
  let finish = "2023-9-10";
  function CalcTime(endTime) {
    let time = Date.parse(endTime) - Date.parse(new Date());
    let day;
    let hours;
    let minutes;
    let seconds;
    if (time <= 0) {
      day = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      day = Math.floor(time / (1000 * 60 * 60 * 24));
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((time / (1000 * 60)) % 60);
      seconds = Math.floor((time / 1000) % 60);
    }
    setSaleDay(setZero(day));
    setSaleHours(setZero(hours));
    setSaleMinutes(setZero(minutes));
    setSaleSeconds(setZero(seconds));
  }
  function setZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  useEffect(() => {}, []);
  setTimeout(() => {
    CalcTime(finish);
  }, 1000);
  return (
    <>
      <div className="Aksiya">
        <div className="border500">
          <marquee behavior="dd" direction="right">
            <h6>Bizda Super aksiyalar:</h6>
          </marquee>
          <p>
            Menu bo'limiga o'tib Aksiyalar bo'limini tanlang va xarid
            qiling.(Aksiya muddati chegaralangan)
          </p>
        </div>
        <div className="time_sale">
          <div className="time_sale_item">
            {saleDay}
            <span className="sp">Day</span>
          </div>
          <div className="time_sale_item">
            {saleHours}
            <span className="sp">Hour</span>
          </div>
          <div className="time_sale_item">
            {saleMinutes}
            <span className="sp">Minute</span>
          </div>
          <div className="time_sale_item">
            {saleSeconds}
            <span className="sp">Second</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aksiya;
