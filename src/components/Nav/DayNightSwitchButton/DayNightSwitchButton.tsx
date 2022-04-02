import * as React from 'react';
// @ts-ignore
import {SwitchButtonContainer} from "./DayNightSwitchButton.styles.tsx";

export const DayNightSwitchButton = ({isDay, themeChange}) => {
  const theme = isDay ? 'night' : 'day'
  return (
    <SwitchButtonContainer onClick={themeChange}>
      <div className={`toggle ` + theme}>
        <div className="notch">
          <div className="crater"/>
          <div className="crater"/>
          <div className="crater"/>
        </div>
        <div>
          <div className="shape sm"/>
          <div className="shape sm"/>
          <div className="shape md"/>
          <div className="shape lg"/>
        </div>
      </div>
    </SwitchButtonContainer>
  )
}