import React from "react";

export default function MySelect({options, defaultValue, onChange, value}) {    
  return (
    <>
      <select onChange={e => onChange(e.target.value)} className="form-select w-50">
              <option disabled value="">{defaultValue}</option>
              {options.map(option => (
                  <option key={option.value} value={option.value}>Sort by {option.title}</option>
              ))}
      </select>
    </>
  );
}
