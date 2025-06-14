"use client";
import Table from "@/components/table/Table";
import Pagination from "@/components/ui/Pagination";
import SInput from "@/components/ui/SInput";
import { eventsData, role } from "@/lib/data";
import { TColumn } from "@/types/column";
import Image from "next/image";
import { useState } from "react";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns: TColumn[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Class",
    accessorKey: "class",
  },
  {
    header: "Date",
    accessorKey: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessorKey: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessorKey: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];

const EventListPage = () => {
  const [page, setPage] = useState(1);
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )} */}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <SInput placeholder="Search..." />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* {role === "admin" && <FormModal table="event" type="create" />} */}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* PAGINATION */}
      <Pagination page={page} setPage={setPage} total={eventsData.length} />
    </div>
  );
};

export default EventListPage;
