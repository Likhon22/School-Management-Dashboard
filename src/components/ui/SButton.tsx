"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type SButtonProps = {
  className?: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const SButton = ({
  className,
  text,
  disabled = false,
  ...props
}: SButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        "bg-gray-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out",
        {
          "cursor-pointer hover:bg-gray-700 hover:scale-105": !disabled,
          "opacity-30 cursor-not-allowed pointer-events-none grayscale":
            disabled,
        },
        className
      )}
    >
      {text}
    </button>
  );
};

export default SButton;
