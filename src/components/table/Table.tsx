"use client";

import { TColumn } from "@/types/column";
import { ReactNode } from "react";

type TableProps<T> = {
  columns: TColumn[];
  data: T[];
  renderRow: (item: T) => ReactNode;
};
const Table = <T,>({ columns, data, renderRow }: TableProps<T>) => {
  return (
    <div className="w-full mt-12">
      <table className="w-full text-sm text-left text-gray-500 scroll-m-0 dark:text-gray-400">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            {columns?.map((column) => (
              <th className={` ${column.className}`} key={column.accessorKey}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data?.length > 0 && data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
