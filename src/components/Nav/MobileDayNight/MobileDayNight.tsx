import * as React from 'react';
// @ts-ignore
import {MobileDayNightContainer} from "./MobileDayNight.styles.tsx";

const MobileDayNight = ({isDay, themeChange}) => {

  return (
    <MobileDayNightContainer onClick={themeChange}>
      <div className='outside'>
         <div>TOGGLE {isDay ? 'NIGHT MODE' : 'DAY MODE'}</div>
      </div>
    </MobileDayNightContainer>
  )
}

export default MobileDayNight;
