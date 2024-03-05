export const formatToFixedDigits = (
  number: number | string,
  length: number,
) => {
  return number.toString().padStart(length, '0');
};
