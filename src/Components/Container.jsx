import { forwardRef } from "react";
import { cn } from "../lib/utils";

const Container = forwardRef(({ children, className, ...props }, ref) => (
  <div
    className={cn("mx-auto w-11/12 max-w-7xl 2xl:w-4/5", className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
))
Container.displayName = "Container"

export default Container;
