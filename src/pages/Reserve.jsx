import { useState } from "react";
import Nav from "./Nav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style.css";

function Reserve() {
  const today = new Date().toDateString();

  // const [selectedDate, setSelectedDate] = useState(today);
  const [reservedDates, setReservedDates] = useState([]);
  // const [bookedPerson, setBookedPerson] = useState("");

  const [reservation, setReservation] = useState({ person: "", date: today });

  const handleDateChange = (date) => {
    console.log("date", date);
    setReservation((prevReservation) => ({
      ...prevReservation,
      date: date.toDateString(),
    }));
  };

  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    setReservation((prevReservation) => ({
      ...prevReservation,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (reservation.person && reservation.date) {
      setReservedDates((preDate) => [...preDate, reservation]);
      setReservation({ person: "", date: today });
    }
  };

  return (
    <>
      <Nav />
      <div className="reserve">
        <div>
          <h3>
            Please select the day you want to reserve <br />
            and leave your name with it!
          </h3>
        </div>
        <form>
          <div className="reserved-person">
            <label>Name: </label>
            <input
              name="person"
              value={reservation.person}
              onChange={handlePersonChange}
            />
          </div>
          <div className="reserve-calendar">
            <Calendar value={reservation.date} onChange={handleDateChange} />
          </div>
          <button onClick={submitHandler} className="submit-btn">
            Submit
          </button>
        </form>
        <div className="selected-date">
          The day you've selected is:{" "}
          <strong>{reservation.date && reservation.date}</strong>. <br />
          If you want to book the date, please click submit button.
        </div>
        <div className="underline"></div>
        <h3>
          {reservedDates.length > 0 && "Below dates are already reserved!"}
        </h3>
        <div className="reserved-days">
          {reservedDates &&
            reservedDates.map((reservation, index) => (
              <div key={index} className="reserved-date">
                {` Name: ${reservation.person}, Date: ${reservation.date}`}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Reserve;
