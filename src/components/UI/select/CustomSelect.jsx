import React from "react";
import './CustomSelect.css'

const CustomSelect = ({ options, defaultOption, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultOption}
      </option>
      {options.map((op) => (
        <option key={op.value} value={op.value}>
          {op.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
