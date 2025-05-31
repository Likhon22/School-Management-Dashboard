"use client";
import Announcement from "@/components/Announcement";
import EventsCard from "@/components/cards/EventsCard";
import EventCalendar from "@/components/EventCalendar";
import ScheduleCalendar from "@/components/ScheduleCalendar";
import { Value } from "@/types/eventCalendar";
import React, { useState } from "react";

const StudentPage = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="mt-6 flex gap-4 flex-col xl:flex-row ">
      {/* left */}

      <div className="w-full xl:w-2/3 flex flex-col gap-8 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <ScheduleCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar value={value} onChange={setValue} />
        <EventsCard eventTitle="Events" />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
