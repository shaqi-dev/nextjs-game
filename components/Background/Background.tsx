import React, { FC, PropsWithChildren } from "react";

import { BackgroundProps } from "./Background.props";
import { StyledBackground } from "./Background.styled";

const Background: FC<PropsWithChildren<BackgroundProps>> = ({
	image,
	children,
}) => {
	return <StyledBackground image={image}>{children}</StyledBackground>;
};

export default Background;
