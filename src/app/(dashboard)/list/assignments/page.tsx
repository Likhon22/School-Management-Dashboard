"use client";
import Table from "@/components/table/Table";
import Pagination from "@/components/ui/Pagination";
import SInput from "@/components/ui/SInput";
import { assignmentsData, role } from "@/lib/data";
import { TColumn } from "@/types/column";
import Image from "next/image";
import { useState } from "react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const column: TColumn[] = [
  {
    header: "Subject Name",
    accessorKey: "name",
  },
  {
    header: "Class",
    accessorKey: "class",
  },
  {
    header: "Teacher",
    accessorKey: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessorKey: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];

const AssignmentListPage = () => {
  const [page, setPage] = useState(1);
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* {role === "admin" ||
            (role === "teacher" && (
              <>
                <FormModal table="assignment" type="update" data={item} />
                <FormModal table="assignment" type="delete" id={item.id} />
              </>
            ))} */}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <SInput placeholder="Search..." className="w-full md:w-auto" />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* {role === "admin" ||
              (role === "teacher" && (
                <FormModal table="assignment" type="create" />
              ))} */}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={column} renderRow={renderRow} data={assignmentsData} />
      {/* PAGINATION */}
      <Pagination
        page={page}
        setPage={setPage}
        total={assignmentsData.length}
      />
    </div>
  );
};

export default AssignmentListPage;
