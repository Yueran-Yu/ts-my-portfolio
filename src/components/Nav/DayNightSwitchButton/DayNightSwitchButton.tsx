import * as React from 'react';
import {SwitchButtonContainer} from "./DayNightSwitchButton.styles";
import {FC} from "react";

interface DNProps{
isDay:boolean
themeChange: ()=>void
}

export const DayNightSwitchButton:FC<DNProps> = ({isDay, themeChange}): JSX.Element => {
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