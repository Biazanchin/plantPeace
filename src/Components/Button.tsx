import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to: string;
}

export function Button({ children, to }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to.startsWith("http")) {
      window.open(to, "_blank", "noopener,noreferrer");
    } else {
      navigate(to);
    }
  };

  return (
    <div
      className="transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:bg-primary-avacado text-white w-[190px] h-[60px] flex justify-center items-center bg-primary-lunar-green"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
