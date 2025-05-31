"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type SButtonProps = {
  className?: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const SButton = ({ className, text, ...props }: SButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-gray-600 text-white py-2 px-4 rounded-md cursor-pointer",
        className
      )}
    >
      {text}
    </button>
  );
};

export default SButton;
