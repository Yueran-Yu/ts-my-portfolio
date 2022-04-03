import * as React from 'react';
import {MobileDayNightContainer} from "./MobileDayNight.styles";
import {FC } from "react";

interface MobileDayNightProps{
	isDay:boolean
	themeChange: ()=>void
	onClick: ()=>void
}

const MobileDayNight:FC<MobileDayNightProps> = ({isDay, themeChange}) => {

  return (
    <MobileDayNightContainer onClick={themeChange}>
      <div className='outside'>
         <div>TOGGLE {isDay ? 'NIGHT MODE' : 'DAY MODE'}</div>
      </div>
    </MobileDayNightContainer>
  )
}

export default MobileDayNight;
