"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
const localizer = momentLocalizer(moment);
const ScheduleCalendar = () => {
  const [view, setView] = useState<View>(Views.DAY);

  const handleViewChange = (selectedView: View) => {
    setView(selectedView);
  };
//   const dayPropGetter = (date: Date) => {
//     const day = date.getDay();
//     if (day === 5) {
//       return {
//         style: {
//           display: "none",
//         },
//       };
//     }
//     return {};
//   };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleViewChange}
      min={new Date(2025, 1, 0, 9, 0, 0)}
  
      max={new Date(2025, 1, 0, 18, 0, 0)}
    />
  );
};

export default ScheduleCalendar;
