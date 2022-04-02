import * as React from 'react';
// @ts-ignore
import {FooterContainer} from "./Footer.styles.tsx";

 const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <FooterContainer>
      <div>
      <p>&copy; Made By Grace Yu  &#10084; {date} </p>
      </div>
    </FooterContainer>
  )
}

export default Footer;
