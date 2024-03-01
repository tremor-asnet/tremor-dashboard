"use client";

import { useRef, useState, ReactNode } from "react";

interface PopoverProps {
  children: ReactNode;
  content: string;
  className?: string;
}

const Popover = ({ content = "", children, className = "" }: PopoverProps) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseLeft = () => {
    setShow(false);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center">
      {children}
      <div
        hidden={!show}
        className={`h-fit absolute bottom-[100%] right-0 shadow-md z-50 text-secondary bg-white rounded transition-all ${className}`}>
        <div className="text-sm font-light rounded p-2">{content}</div>
      </div>
    </div>
  );
};

export default Popover;
