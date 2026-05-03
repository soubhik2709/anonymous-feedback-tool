//src/components/ui/Button.tsx
import React from "react";
type ButtonProps = {
  children:React.ReactNode;
  variant?:"primary"|"secondary"|"danger";
  size?:"sm"|"md"|"lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  variant="primary",
  size="md",
  type = "button",
  disabled=false,
  loading = false,
  onClick,
}: ButtonProps) {

const base = "rounded-lg font-medium transition-all flex items-center justify-center";
const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-blue-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
}
const sizes = {
  sm: "px-4 py-2 text-sm sm:px-3 sm:py-1 sm:text-xs",
  md: "px-3 py-3 text-base sm:px-4 sm:py-2 sm:text-sm lg:px-4 lg:py-2 lg:text-sm",
  lg: "px-6 py-4 text-lg sm:px-5 sm:py-3 sm:text-base lg:px-6 lg:py-3 lg:text-lg",
};
const disabledStyle = "opacity-50 cursor-not-allowed";

  return(
   <button
className={`
  ${base}
  ${variants[variant]}
  ${sizes[size]}
  ${disabled || loading ? disabledStyle : ""}
  `}
type={type}
disabled={disabled || loading}
onClick={onClick}
  
  >{loading ? "Loading...." : children}</button>
);
}

