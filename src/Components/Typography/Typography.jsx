import { cn } from "../../lib/utils";
import styles from "./Typography.module.css";

function Heading({ children, className, ...props }) {
  return (
    <h2
      className={cn(
        "mb-4 text-3xl font-bold text-gray-50 md:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

function Caption({ children, className, ...props }) {
  return (
    <p
      className={cn(
        `${styles.caption}`,
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

function Paragraph({ children, className, ...props }) {
  return (
    <p
      className={cn("max-w-prose mx-auto md:mx-0 leading-relaxed text-center md:text-justify text-gray-400", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { Caption, Heading, Paragraph };

