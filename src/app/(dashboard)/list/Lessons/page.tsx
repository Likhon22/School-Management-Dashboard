"use client";
import Table from "@/components/table/Table";
import Pagination from "@/components/ui/Pagination";
import SInput from "@/components/ui/SInput";
import { lessonsData, role } from "@/lib/data";
import { TColumn } from "@/types/column";
import Image from "next/image";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns: TColumn[] = [
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
    header: "Actions",
    accessorKey: "action",
  },
];

const LessonListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* {role === "admin" && (
            // <>
            //   <FormModal table="lesson" type="update" data={item} />
            //   <FormModal table="lesson" type="delete" id={item.id} />
            // </>
          )} */}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <SInput placeholder="Search..." className="w-full md:w-auto" />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* {role === "admin" && <FormModal table="lesson" type="create" />} */}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* PAGINATION */}
      <Pagination total={10} page={1} setPage={() => {}} />
    </div>
  );
};

export default LessonListPage;
