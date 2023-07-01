import { forwardRef } from "react";

const Image = forwardRef(
  ({ metadata, alt, isAboveTheFold = false, ...props }, ref) => (
    <img
      src={metadata.src}
      width={metadata.width}
      height={metadata.height}
      alt={alt}
      loading={isAboveTheFold ? "eager" : "lazy"}
      decoding="async"
      ref={ref}
      {...props}
    />
  )
)
Image.displayName = "Image"

export default Image;
