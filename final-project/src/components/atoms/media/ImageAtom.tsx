interface ImageAtomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageAtom = ({
  src,
  alt,
  width = 100,
  height = 100,
  className,
}: ImageAtomProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-lg ${className}`}
    />
  );
};

export default ImageAtom;
