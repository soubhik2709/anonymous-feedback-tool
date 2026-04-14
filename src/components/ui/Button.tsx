//src/components/ui/Button.tsx
import React from "react";
import "../../styles/components/ui/button.css"
type ButtonProps = {
  children:React.ReactNode;
  variant?:"primary"|"secondary"|"danger";
  size?:"sm"|"md"|"lg";
  type?: "button" | "submit" | "reset";
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  variant="primary",
  size="md",
  type = "button",
  disabled=false,
  onClick,
}: ButtonProps) {
  return(
   <button
className={`
btn btn-${variant} btn-${size}
  `}
type={type}
disabled={disabled}
onClick={onClick}
  
  >{children}</button>
);
}

/*  className={`
 ${style.btn}
   ${style[`btn${variant}`]}
   ${style[`btn${size}`]}
  `}

   */