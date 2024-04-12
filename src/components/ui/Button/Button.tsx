import React from "react";
import "./Button.scss";
import classNames from "classnames";


type ButtonProps = {
  children?: React.ReactNode,
  kind?: string,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  id?: string,
  stylesClass?: string,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void

}

const Button = ({
  children,
  kind,
  type = 'button',
  onClick,
  disabled = false,
  id,
  stylesClass
} : ButtonProps) => {


  const btnClass = classNames("button", 
  stylesClass
  , {
    primary: kind === "primary",
    secondary: kind === "secondary",
    tertiary: kind === "tertiary",
  });

  return (
    <button
      className={btnClass}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button;
