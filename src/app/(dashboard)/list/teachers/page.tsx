"use client";
import Table from "@/components/table/Table";
import Pagination from "@/components/ui/Pagination";
import SInput from "@/components/ui/SInput";
import { User_Role } from "@/constant/role";
import { role, teachersData } from "@/lib/data";
import { TColumn } from "@/types/column";
import { Teacher } from "@/types/teacher";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const columns: TColumn[] = [
  {
    header: "Info",
    accessorKey: "info",
  },
  {
    header: "Teacher Id",
    accessorKey: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessorKey: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessorKey: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessorKey: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessorKey: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessorKey: "actions",
  },
];
const TeacherList = () => {
  const [page, setPage] = useState(1);
  console.log("page", page);

  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === User_Role.admin && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
            // <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="py-6 h-full flex flex-col ">
      {/* Top */}
      <div className="flex justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex gap-3 flex-col md:flex-row w-full md:w-auto">
          <SInput hidden={false} placeholder="Search from the list..." />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-lYellow w-8 h-8 rounded-full flex items-center justify-center">
              <Image
                src="/filter.png"
                alt="filter"
                width={14}
                height={14}
              ></Image>
            </button>
            <button className="bg-lYellow w-8 h-8 rounded-full flex items-center justify-center">
              <Image src="/sort.png" alt="sort" width={14} height={14}></Image>
            </button>
            <button className="bg-lYellow w-8 h-8 rounded-full flex items-center justify-center">
              <Image src="/plus.png" alt="plus" width={14} height={14}></Image>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1">
        <Table renderRow={renderRow} data={teachersData} columns={columns} />
      </div>
      {/* pagination */}
      <Pagination page={page} setPage={setPage} total={10} />
    </div>
  );
};

export default TeacherList;
