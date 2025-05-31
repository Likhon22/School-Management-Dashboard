"use client";
import AttendanceChart from "@/components/charts/AttendanceChart";

import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/charts/FinanceChart";
import StatCard from "@/components/cards/StatCard";
import { Value } from "@/types/eventCalendar";
import { useState } from "react";
import CountChart from "@/components/charts/CountChart";
import EventsCard from "@/components/cards/EventsCard";
import Announcement from "@/components/Announcement";

const AdminPage = () => {
  const [value, setValue] = useState<Value>(new Date());
  console.log("Admin Page Rendered");
  console.log(value);

  return (
    <div
      className="
    mt-6 flex gap-4 flex-col md:flex-row"
    >
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <StatCard type="student" />
          <StatCard type="teacher" />
          <StatCard type="parent" />
          <StatCard type="admin" />
        </div>
        {/* middle chart */}

        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className=" w-full lg:w-2/5 h-[450px]">
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className=" w-full lg:w-3/5 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar value={value} onChange={setValue} />
        <EventsCard eventTitle="Events" />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
