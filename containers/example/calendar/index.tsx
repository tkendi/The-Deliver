import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// data
import events from "./events";

const ExampleCalendarFull = () => {
  const [date, setDate] = useState(new Date());

  const localizer: any = momentLocalizer(moment);

  console.log(localizer);

  const ColoredDateCellWrapper = ({ children }: any) => {
    return (
      <>
        <div>
          <h1>
            {date.getFullYear()}.{new Date().getMonth() + 1}
          </h1>

          <button onClick={() => localizer.continuesPrior()}>{"<"}</button>

          <button>{">"}</button>
        </div>
      </>
    );
  };

  return (
    localizer && (
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        style={{ height: 500 }}
        components={{
          toolbar: ColoredDateCellWrapper,
        }}
      />
    )
  );
};

export default ExampleCalendarFull;
