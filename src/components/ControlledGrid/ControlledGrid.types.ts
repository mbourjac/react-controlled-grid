export interface GridImage {
  id: string;
  src: string;
}

export interface GridConfig {
  displayedImagesCount: number;
  imagesHeight: number;
  imagesMaxHeight: number;
  imagesAspectRatio: number;
  gridPaddingX: number;
  gridGap: number;
}
