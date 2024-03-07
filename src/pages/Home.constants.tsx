import type { GridImage } from '../components/ControlledGrid/ControlledGrid.types';

export const gridImages: GridImage[] = Object.values(
  import.meta.glob('@images/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  }),
).map((imageUrl) => ({
  id: imageUrl.split('/').pop()!,
  src: imageUrl,
}));

export const gridConfig = {
  displayedImagesCount: 20,
  imagesHeight: 150,
  gridGap: 5,
};
