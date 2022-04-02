import * as React from 'react';
import {ImArrowUp} from "react-icons/im";
// @ts-ignore
import {BackToTopContainer} from "./BackToTop.styles.tsx";



const BackToTop = ({toTopRef}) => {
  if (toTopRef && toTopRef.current) {
    toTopRef.current.addEventListener('click', () => {
      window.scrollTo(0, 0)
    })
  }

  return (
    <BackToTopContainer ref={toTopRef}>
      <ImArrowUp/>
    </BackToTopContainer>

  )
}

export default BackToTop;