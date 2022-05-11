import * as React from 'react';
import {SectionTitleContainer} from "./SectionTitle.styles";

const SectionTitle = ({children}: { children: string }) => {
	return (
		<SectionTitleContainer>
      <span>
      {children}
      </span>
		</SectionTitleContainer>
	);
};

export default SectionTitle;
