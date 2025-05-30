"use client";
import { InputHTMLAttributes } from "react";
import clsx from "clsx";
type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const SInput = ({ placeholder, type, className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "border rounded-md p-1 bg-white focus:outline-none focus:border-red-100 focus:ring-1 focus:ring-red-100 text-sm w-full",
        className
      )}
      {...props}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default SInput;
