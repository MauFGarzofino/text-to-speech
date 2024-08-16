import React from "react";
import "./IconAtom.css";

interface IconAtomProps {
  icon: React.ReactNode;
  text?: string;
}

const IconAtom = ({ icon, text }: IconAtomProps) => {
  return (
    <div className="icon-atom">
      <div className="icon-image">{icon}</div>
      <span className="icon-text">{text}</span>
    </div>
  );
};

export default IconAtom;
