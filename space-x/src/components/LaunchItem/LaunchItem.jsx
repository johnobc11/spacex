import React from "react";
import { format, parseISO } from "date-fns";
import "./LaunchItem.scss"

export const LaunchItem = ({ item, index }) => {
  //missing rocket name
  const { flight_number, mission_name, launch_date_utc } = item;
  const { rocket_name } = item.rocket;

  return (
    <li className="launch_list" key={index}>
      <div>
        <span className="launch_span__index--left">{`#${flight_number}`}</span>
        <span className="launch_span">{`${mission_name}`}</span>
      </div>
      <div>
        <span className="launch_span">
          {/* moment is deprecated - using datefns instead */}
          <span className="launch_span">{format(parseISO(launch_date_utc), "yyyy-MM-dd : HH:mm:ss")}</span>
          <span className="launch_span__index--right">{`${rocket_name}`}</span>
        </span>
      </div>
    </li>
  );
};
