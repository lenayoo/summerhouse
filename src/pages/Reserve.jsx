import { useState } from "react";
import Nav from "./Nav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style.css";

function Reserve() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservedDates, setReservedDates] = useState([]);

  const handleDateChange = (date) => {
    console.log("date", date);
    setSelectedDate(date.toDateString());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setReservedDates((preReserved) => [...preReserved, selectedDate]);
  };

  console.log(reservedDates);

  return (
    <>
      <Nav />
      <div className="reserve">
        <div>
          <h3>Please select the day you want to reserve</h3>
        </div>
        <form>
          <div className="reserve-calendar">
            <Calendar value={selectedDate} onChange={handleDateChange} />
          </div>
          <button onClick={submitHandler}>Submit</button>
        </form>
        <div className="selected-date">
          The day you've selected is:{" "}
          <strong>{selectedDate && selectedDate}</strong>. <br />
          If you want to book the date, please click submit button.
        </div>
        <div className="underline"></div>
        <div className="reserved-days">
          {reservedDates.map((date) => (
            <div key={date.index} className="reserved-date">
              {date}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Reserve;
