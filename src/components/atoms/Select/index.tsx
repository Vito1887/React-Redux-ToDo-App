import React from 'react';

type Props = {
  option: { value: string; name: string }[];
  defaultValue?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const Select: React.FC<Props> = ({
  option,
  defaultValue,
  value,
  onChange,
}) => (
  <select value={value} onChange={(event) => onChange(event.target.value)}>
    <option disabled value="">
      {defaultValue}
    </option>

    {option?.map((option) => (
      <option key={option?.value} value={option?.value}>
        {option.name}
      </option>
    ))}
  </select>
);
