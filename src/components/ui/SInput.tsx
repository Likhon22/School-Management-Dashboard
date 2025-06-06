"use client";
import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  parentClassName?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const SInput = ({
  placeholder = "Search...",
  type = "text",
  className,
  parentClassName,
  hidden = true,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsx(
        " items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ",
        hidden && "hidden md:flex",
        !hidden && "flex",
        parentClassName
      )}
    >
      <Image src="/search.png" alt="search" width={14} height={14} />
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={clsx("bg-transparent w-[200px] p-2 outline-none", className)}
      />
    </div>
  );
};

export default SInput;
