import React, { FC, PropsWithChildren } from 'react';
import { StaticImageData } from 'next/image';

import { StyledBackground } from './Background.styled'

interface GameBackgroundProps {
  image: StaticImageData;
}

const Background: FC<PropsWithChildren<GameBackgroundProps>> = ({ image, children }) => {
  return (
    <StyledBackground image={image}>
      { children }
    </StyledBackground>
  );
};

export default Background;