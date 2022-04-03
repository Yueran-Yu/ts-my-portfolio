import * as React from 'react';
import {FC} from 'react';
import {ImArrowUp} from "react-icons/im";
import {BackToTopContainer} from "./BackToTop.styles";
import {BackToTopProps} from "../../type";



const BackToTop:FC<BackToTopProps> = ({toTopRef}) => {
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