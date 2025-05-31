"use client";

import { Value } from "@/types/eventCalendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type EventCalendarProps = {
  value: Value;
  onChange: (value: Value) => void;
};
const EventCalendar = ({ value, onChange }: EventCalendarProps) => {
  return (
    <div className="bg-white rounded-xl w-full  p-4">
      <Calendar value={value} onChange={onChange} />
    </div>
  );
};

export default EventCalendar;
