"use client";
import Announcement from "@/components/Announcement";

import ScheduleCalendar from "@/components/ScheduleCalendar";
import { Value } from "@/types/eventCalendar";
import React, { useState } from "react";

const TeacherPage = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="flex-1 mt-6 flex gap-4 flex-col xl:flex-row ">
      {/* left */}

      <div className="w-full xl:w-2/3 flex flex-col gap-8 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <ScheduleCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
