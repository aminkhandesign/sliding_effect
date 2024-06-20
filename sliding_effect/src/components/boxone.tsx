import { forwardRef } from "react";

const BoxOne = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactElement;
    color: string;
  }
>(({ className, color, children }) => {
  return (
    <div ref={ref} className={className} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
});
//some change
export default BoxOne;
