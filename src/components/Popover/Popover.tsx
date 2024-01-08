"use client";

import { useRef, useState, ReactNode } from "react";

interface PopoverProps {
  children: ReactNode;
  content: string;
}

const Popover = ({ content = "", children }: PopoverProps) => {
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
        className="min-w-fit w-[200px] h-fit absolute bottom-[100%] z-50 transition-all">
        <div className="text-sm font-light text-secondary rounded bg-white p-3 shadow-md mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popover;
