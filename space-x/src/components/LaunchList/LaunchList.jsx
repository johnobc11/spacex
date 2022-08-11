import React from "react";
import { LaunchItem } from "../LaunchItem";

export const LaunchList = ({ items, filter, sort }) => {
  let filteredItems = [...items];

  //Bug in the sorting function below
  const launches = filteredItems.sort((a, b) => {
    const x = new Date (a.launch_date_utc);
    const y = new Date(b.launch_date_utc);
    return sort ? y - x : x - y;
  });

  return (
    <ul className="launch-list">
      {!filter ? launches.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      }) : launches.filter((f) => f.launch_year === filter).map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />
      })}
      
    </ul>
  );
};
