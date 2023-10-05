import React, { FC, ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    text: string;
  }
  
  const Tooltip: FC<TooltipProps> = ({ children, text }) => {
    return (
      <div className="relative group">
        {children}
        <div className="absolute z-10 invisible group-hover:visible bg-black text-white text-xs rounded py-1 px-2 bottom-full -left-1/2 ml-14 mb-2">
          {text}
        </div>
      </div>
    );
  }

export default Tooltip;