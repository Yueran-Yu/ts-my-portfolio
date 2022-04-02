import * as React from 'react';
// @ts-ignore
import {SectionTitleContainer} from "./SectionTitle.styles.tsx";

const SectionTitle = ({children}) => {
  return (
    <SectionTitleContainer>
      <span>
      {children}
      </span>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
