import type { GridImage } from './ControlledGrid.types';

type GridProps = {
  images: GridImage[];
  gap: string;
  imagesHeight: string;
  imagesAspectRatio: number;
};

export const Grid = ({
  images,
  gap,
  imagesHeight,
  imagesAspectRatio,
}: GridProps) => {
  return (
    <div className="flex flex-wrap p-10" style={{ gap: `${gap}px` }}>
      {images.map(({ id, src }) => (
        <div
          key={id}
          style={{
            height: `${imagesHeight}px`,
            aspectRatio: imagesAspectRatio,
          }}
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
