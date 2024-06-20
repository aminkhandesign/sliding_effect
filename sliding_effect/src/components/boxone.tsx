import { forwardRef } from "react";

const BoxOne = forwardRef(
  ({
    className,
    color,
    children,
    ref,
  }: {
    className?: string;
    children: React.ReactElement;
    color: string;
    ref: React.RefObject<HTMLDivElement>;
  }) => {
    return (
      <div ref={ref} className={className} style={{ backgroundColor: color }}>
        {children}
      </div>
    );
  }
);

export default BoxOne;
