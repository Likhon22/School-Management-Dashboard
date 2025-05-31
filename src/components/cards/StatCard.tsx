import Image from "next/image";

type StatCardProps = {
  type: "student" | "teacher" | "parent" | "admin";
};
const StatCard = ({ type }: StatCardProps) => {
  return (
    <div className="odd:bg-lPurple even:bg-lYellow p-4 rounded-2xl flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 rounded-full py-1 text-green-600">
          2024/5/12
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className=" text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default StatCard;
