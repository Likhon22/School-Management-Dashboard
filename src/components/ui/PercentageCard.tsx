import clsx from "clsx";
import React from "react";

type PercentageCardProps = {
  className?: string;
  totalPerson: number;
  gender: string;
  percentage: number;
};
const PercentageCard = ({
  className,
  totalPerson,
  gender,
  percentage,
}: PercentageCardProps) => {
  return (
    <div className=" flex flex-col gap-1">
      <div className={clsx("w-5 h-5 rounded-full bg-lSky ", className)} />
      <h1 className="font-bold">{totalPerson}</h1>
      <h2 className="capitalize text-xs text-gray-300">
        {gender}({percentage}%)
      </h2>
    </div>
  );
};

export default PercentageCard;
