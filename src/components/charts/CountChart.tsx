"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PercentageCard from "../ui/PercentageCard";

const data = [
  {
    name: "Total Students",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 48,

    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 52,

    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="w-full relative h-[75%] mt-4">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className=" flex justify-center gap-16">
        {/* male */}
        <PercentageCard
          className="bg-lSky"
          totalPerson={1234}
          gender="boys"
          percentage={52}
        />
        <PercentageCard
          className="bg-lYellow"
          totalPerson={1234}
          gender="girls"
          percentage={48}
        />
      </div>
    </div>
  );
};

export default CountChart;
