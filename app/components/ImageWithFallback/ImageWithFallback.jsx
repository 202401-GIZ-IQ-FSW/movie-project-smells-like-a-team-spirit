const { default: Image } = require("next/image");
import { useState, useEffect } from "react";
const ImageWithFallback = ({ alt, src, ...props }) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? "/not-found.jpg" : src}
      {...props}
    />
  );
};
export default ImageWithFallback;
