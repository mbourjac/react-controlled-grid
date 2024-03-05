import type { GridImage } from './Home.types';

export const gridImages: GridImage[] = Object.values(
  import.meta.glob('@images/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  }),
).map((imageUrl) => ({
  id: imageUrl.split('/').pop()!,
  src: imageUrl,
}));
