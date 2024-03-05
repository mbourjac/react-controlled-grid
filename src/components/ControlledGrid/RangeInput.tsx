import type { ChangeEvent } from 'react';

type RangeInputProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RangeInput = ({
  id,
  label,
  value,
  min,
  max,
  handleValueChange,
}: RangeInputProps) => {
  const fillPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id}>{label}</label>
      <input
        type="range"
        id={id}
        name={id}
        min={min}
        max={max}
        value={value}
        onChange={handleValueChange}
        style={{
          background: `linear-gradient(to right, #000 ${fillPercentage}%, #ccc ${fillPercentage}%)`,
        }}
      />
    </div>
  );
};
