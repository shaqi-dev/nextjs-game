import styled from '@emotion/styled';

import { BackgroundProps } from './Background.props';

export const StyledBackground = styled.div<BackgroundProps>`
  width: 980px;
  height: 810px;
  background-image: url(${props => (props.image.src)});
`;