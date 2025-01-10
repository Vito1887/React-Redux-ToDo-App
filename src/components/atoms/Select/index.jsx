import React from "react";

export const Select = ({ option, defaultValue, value, onChange }) => (
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
