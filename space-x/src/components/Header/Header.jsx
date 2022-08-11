import React from "react";
import LABEL from "../../constants/Labels";
import { Button } from "../../components/Button";
import { useLaunchContext } from "../../contexts/LaunchContext/LaunchContext";

export const Header = () => {
  const { filter } = useLaunchContext();
  const { listLaunches } = useLaunchContext();

  return (
    <header className="app__header">
      <div className="app__logo">
        <img src="/spacex.png" className="app__logo-image" alt="spacexlogo" />
        <span className="app__logo-txt">{LABEL.LAUNCHES}</span>
      </div>
      <Button
        filter={filter}
        onClick = {() => listLaunches()}
        classes="button button--reload"
        label={LABEL.RELOAD}
        allowDisabledState={false}
      />
    </header>
  );
};
