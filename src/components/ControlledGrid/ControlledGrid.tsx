import { type ChangeEvent, useState, useCallback } from 'react';
import { formatToFixedDigits } from '../../helpers/numbers';
import type { GridImage } from '../../pages/Home.types';
import { Grid } from './Grid';
import { RangeInput } from './RangeInput';

type ControlledGridProps = {
  images: GridImage[];
};

export const ControlledGrid = ({ images }: ControlledGridProps) => {
  const [gridConfig, setGridConfig] = useState({
    imagesHeight: 150,
    gridGap: 5,
  });
  const { imagesHeight, gridGap } = gridConfig;

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setGridConfig((prevGridConfig) => ({
        ...prevGridConfig,
        [name]: Number(value),
      }));
    },
    [],
  );

  return (
    <section>
      <div className="sticky top-0 flex flex-col justify-between gap-12 bg-white p-10 md:gap-10 xl:flex-row">
        <div className="flex flex-col gap-x-10 gap-y-6 md:flex-row">
          <RangeInput
            id="imagesHeight"
            label={`Height: ${formatToFixedDigits(imagesHeight, 3)} px`}
            value={imagesHeight}
            min={50}
            max={500}
            handleValueChange={handleInputChange}
          />
          <RangeInput
            id="gridGap"
            label={`Gap: ${formatToFixedDigits(gridGap, 2)} px`}
            value={gridGap}
            min={0}
            max={50}
            handleValueChange={handleInputChange}
          />
        </div>
      </div>
      <Grid
        images={images}
        gap={gridGap.toString()}
        imagesHeight={imagesHeight.toString()}
      />
    </section>
  );
};
