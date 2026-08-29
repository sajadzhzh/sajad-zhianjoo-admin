"use client";

import { ReactNode } from "react";
import "./button.css";

type Theme = "primary" | "normal";

const variants = {
  primary: "btn_primary",
  normal: "btn_normal",
};

export default function Button({
  children,
  className,
  disAbled,
  type,
  theme,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  disAbled?: boolean;
  theme: Theme;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const variant = variants[theme];
  return (
    <button
      type={type ?? "button"}
      className={`btn ${className ?? ""} ${variant}`}
      onClick={onClick}
      disabled={disAbled}
    >
      {children}
    </button>
  );
}
