import type { GridImage } from '../../pages/Home.types';

type GridProps = {
  images: GridImage[];
  gap: string;
  imagesHeight: string;
};

export const Grid = ({ images, gap, imagesHeight }: GridProps) => {
  return (
    <div className="flex flex-wrap p-10" style={{ gap: `${gap}px` }}>
      {images.map(({ id, src }) => (
        <div
          key={id}
          className="aspect-[3/4]"
          style={{ height: `${imagesHeight}px` }}
        >
          <img
            src={src}
            alt={id}
            className="h-full w-full bg-off-black object-cover"
          />
        </div>
      ))}
    </div>
  );
};
