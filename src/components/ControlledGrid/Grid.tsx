import type { GridImage } from '../../pages/Home.types';

type GridProps = {
  images: GridImage[];
};

export const Grid = ({ images }: GridProps) => {
  return (
    <div className="flex flex-wrap gap-1 p-10">
      {images.map(({ id, src }) => (
        <div key={id} className="aspect-[3/4] h-36">
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
