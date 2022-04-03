import * as React from 'react';
import {SectionTitleContainer} from "./SectionTitle.styles";
import {FC, ReactNode} from "react";

interface SectionTitleProps{
	children:ReactNode
}
const SectionTitle:FC<SectionTitleProps> = ({children}) => {
  return (
    <SectionTitleContainer>
      <span>
      {children}
      </span>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
