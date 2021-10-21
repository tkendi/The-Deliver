import React, { useEffect, useState } from "react";
// import { TZDate } from "tui-calendar";

// import Calenar "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const ExampleCalendarFull = () => {
  const [today, setToday] = useState<any>();
  const [calendar, setCalendar] = useState<any>();

  useEffect(() => {
    if (window) {
      const Calendar = require("tui-calendar");
      // const TZDatae = require("tui-calendar");

      let temp_calendar = new Calendar("#calendar", {
        defaultView: "month",
      });

      setCalendar(temp_calendar);
    }
  }, []);

  // useEffect(() => {
  //   // const renderDate = calendar;
  //   // setToday(calendar.getDate());
  //   console.log(calendar);
  // }, []);

  return (
    <>
      <div id="menu">
        <span id="menu-navi">
          <h3>
            {new Date(calendar?.getDate()._date).getFullYear()}.
            {new Date(calendar?.getDate()._date).getMonth() + 1}
          </h3>

          <button type="button" onClick={() => calendar.prev()}>
            PREV
          </button>
          <button type="button" onClick={() => calendar.next()}>
            NEXT
          </button>

          <button type="button" onClick={() => calendar.today()}>
            Today
          </button>
        </span>
      </div>

      <div id="calendar"></div>
    </>
  );
};

export default ExampleCalendarFull;
