"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Image from "next/image";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 4200, expense: 2100 },
  { name: "Mar", income: 4600, expense: 2800 },
  { name: "Apr", income: 2700, expense: 3000 },
  { name: "May", income: 4800, expense: 2900 },
  { name: "Jun", income: 4700, expense: 5100 },
  { name: "Jul", income: 5200, expense: 3300 },
  { name: "Aug", income: 5300, expense: 3200 },
  { name: "Sep", income: 5100, expense: 3000 },
  { name: "Oct", income: 5500, expense: 3400 },
  { name: "Nov", income: 5600, expense: 3500 },
  { name: "Dec", income: 6000, expense: 3600 },
];
const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
