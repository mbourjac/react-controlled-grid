import type { GridImage } from '../../pages/Home.types';
import { Grid } from './Grid';

type ControlledGridProps = {
  images: GridImage[];
};

export const ControlledGrid = ({ images }: ControlledGridProps) => {
  return (
    <section>
      <Grid images={images}></Grid>
    </section>
  );
};
