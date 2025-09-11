import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  sizes = '100vw',
  width,
  height,
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchpriority={fetchpriority}
      sizes={sizes}
      width={width}
      height={height}
      onError={(e) => {
        e.target.src = "/assets/images/no_image.png"
      }}
      {...props}
    />
  );
}

export default Image;
