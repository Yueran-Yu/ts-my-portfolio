import * as React from 'react';
import {FC} from 'react';

interface ImageProps {
	imageName:string
}

export const Image:FC<ImageProps> = ({imageName}) => {
  return (
    <picture>
      <img src={process.env.PUBLIC_URL + `/images/${imageName}.jpg`} alt={imageName} />
    </picture>
  );
};

