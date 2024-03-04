import React from "react";
import "./Button.scss";
import classNames from "classnames";


type ButtonProps = {
  children?: React.ReactNode,
  kind: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  disabled: boolean,
  id?: string 
}

const Button = ({
  children,
  kind,
  onClick,
  disabled = false,
  id,
} : ButtonProps) => {
  const btnClass = classNames("button", {
    primary: kind === "primary",
    secondary: kind === "secondary",
    tertiary: kind === "tertiary",
  });

  return (
    <button
      className={btnClass}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
