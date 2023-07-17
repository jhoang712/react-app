import React from "react";

// ? means optional so you can set a default color
interface Props {
  children: string;
  color: string;
  onClick: () => void;
  position: { top: string; left: string };
}

const Button = ({ children, onClick, color, position }: Props) => {
  return (
    <button
      className={"btn btn-" + color + " position-relative"}
      style={{ top: position.top, left: position.left }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
