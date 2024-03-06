import { type ChangeEvent, useState, useCallback } from 'react';
import { formatToFixedDigits } from '../../helpers/numbers';
import { usePagination } from '../../hooks/use-pagination';
import type { GridImage } from '../../pages/Home.types';
import { Grid } from './Grid';
import { Pagination } from './Pagination';
import { RangeInput } from './RangeInput';

type ControlledGridProps = {
  images: GridImage[];
};

export const ControlledGrid = ({ images }: ControlledGridProps) => {
  const [gridConfig, setGridConfig] = useState({
    displayedImagesCount: 20,
    imagesHeight: 150,
    gridGap: 5,
  });
  const { displayedImagesCount, imagesHeight, gridGap } = gridConfig;

  const totalImagesCount = images.length;
  const {
    currentPage,
    totalPages,
    getCurrentPageItems: getDisplayedImages,
    handleLoadPrevious,
    handleLoadNext,
  } = usePagination(totalImagesCount, displayedImagesCount);

  const displayedImages = getDisplayedImages(images);

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
        <div className="flex flex-col justify-between gap-x-10 gap-y-6 md:flex-row xl:justify-start">
          <div className="flex gap-10">
            <p>{`${totalImagesCount} image${
              totalImagesCount > 1 ? 's' : ''
            }`}</p>
            <p>{`Page ${formatToFixedDigits(
              currentPage,
              3,
            )}/${formatToFixedDigits(totalPages, 3)}`}</p>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleLoadPrevious={handleLoadPrevious}
            handleLoadNext={handleLoadNext}
          />
        </div>
        <div className="flex flex-col gap-x-10 gap-y-6 md:flex-row">
          <RangeInput
            id="displayedImagesCount"
            label={`Displayed: ${formatToFixedDigits(
              displayedImagesCount,
              3,
            )} images`}
            value={displayedImagesCount}
            min={1}
            max={totalImagesCount}
            handleValueChange={handleInputChange}
          />
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
        images={displayedImages}
        gap={gridGap.toString()}
        imagesHeight={imagesHeight.toString()}
      />
    </section>
  );
};
