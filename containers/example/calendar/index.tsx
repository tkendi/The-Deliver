import React, { useEffect, useState } from "react";
// import { TZDate } from "tui-calendar";

// import Calenar "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

//theme
import { MONTHLY_CUSTOM_THEME } from "./theme";

const ExampleCalendarFull = () => {
  const [calendar, setCalendar] = useState<any>();

  useEffect(() => {
    if (window) {
      const Calendar = require("tui-calendar");

      let temp_calendar = new Calendar("#calendar", {
        defaultView: "month",
        taskView: true,
        theme: MONTHLY_CUSTOM_THEME,
      });

      setCalendar(temp_calendar);

      temp_calendar.createSchedules([
        {
          id: "1",
          calendarId: "1",
          title: "my schedule",
          category: "time",
          start: "2021-10-22T22:30:00+09:00",
          end: "2021-10-23T02:30:00+09:00",
          color: "#bdbdbb", // 일정 색상을 직접 지정할 수 있어요
          bgColor: "#101010",
          dragBgColor: "#101010",
          borderColor: "#ffffff",
        },
        {
          id: "2",
          calendarId: "2",
          title: "second schedule",
          category: "time",
          start: "2021-10-22T17:30:00+09:00",
          end: "2021-10-25T17:31:00+09:00",
          color: "#bbdc00", // 일정 색상을 직접 지정할 수 있어요
          bgColor: "#1C8F4D",
          dragBgColor: "#1C8F4D",
          borderColor: "#ffffff",
        },
      ]);
    }
  }, []);

  useEffect(() => {}, [calendar]);

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
