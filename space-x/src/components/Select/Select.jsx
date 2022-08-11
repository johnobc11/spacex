import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, allowDisabledState }) => {
  const { setFilter, filter } = useLaunchContext();
  const {setItems, items} = useLaunchContext();

  console.log(filter);

  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  const yearsArr = items.map((y) => (y.launch_year));
  const yearOptions = [...new Set(yearsArr)]

  return (
    <select
      name={label}
      className={selectClasses}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
      <option value=''>{label}</option>
      {yearOptions.map((years, idx) => (
        <option value={years} key={idx}>{years}</option>
      ))}
    </select>
  );
};
