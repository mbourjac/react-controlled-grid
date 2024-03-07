import { type ChangeEvent, useState, useCallback, useEffect } from 'react';
import { formatToFixedDigits } from '../../helpers/numbers';
import { usePagination } from '../../hooks/use-pagination';
import { useWindowSize } from '../../hooks/use-window-size';
import type { GridConfig, GridImage } from './ControlledGrid.types';
import { Grid } from './Grid';
import { Pagination } from './Pagination';
import { RangeInput } from './RangeInput';

type ControlledGridProps = {
  images: GridImage[];
  config: GridConfig;
};

export const ControlledGrid = ({ images, config }: ControlledGridProps) => {
  const [gridConfig, setGridConfig] = useState(config);
  const {
    displayedImagesCount,
    imagesHeight,
    imagesMaxHeight,
    imagesAspectRatio,
    gridPaddingX,
    gridGap,
  } = gridConfig;

  const { windowWidth } = useWindowSize();
  const maxAvailableWidth = windowWidth - gridPaddingX * 2;
  const maxAvailableHeight = Math.floor(maxAvailableWidth / imagesAspectRatio);

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

  useEffect(() => {
    if (maxAvailableHeight < imagesMaxHeight) {
      setGridConfig((prevGridConfig) => ({
        ...prevGridConfig,
        imagesHeight: maxAvailableHeight,
      }));
    }
  }, [maxAvailableHeight, imagesMaxHeight]);

  return (
    <section>
      <div
        className="sticky top-0 flex flex-col justify-between gap-12 bg-white md:gap-10 xl:flex-row"
        style={{
          padding: `${gridPaddingX / 16}rem`,
        }}
      >
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
            max={
              maxAvailableHeight < imagesMaxHeight ? maxAvailableHeight : (
                imagesMaxHeight
              )
            }
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
        imagesAspectRatio={imagesAspectRatio}
      />
    </section>
  );
};
