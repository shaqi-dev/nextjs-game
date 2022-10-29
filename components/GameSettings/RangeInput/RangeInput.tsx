import { FC } from "react";

import { RangeInputProps } from "./RangeInput.props";
import { Label, InputWrapper, DataList, Input } from "./RangeInput.styled";

const RangeInput: FC<RangeInputProps> = ({
	id,
	label,
	width,
	options,
	...props
}) => {
	return (
		<Label width={width}>
			{label}
			<InputWrapper>
				<DataList id={`${id}__list`}>
					{options.map((option, i) => (
						<option key={`${id}__list-option-${i}}`} value={option}>
							{option}
						</option>
					))}
				</DataList>
				<Input
					type="range"
					list={`${id}__list`}
					min={0}
					max={options.length - 1}
					step={1}
					{...props}
				/>
			</InputWrapper>
		</Label>
	);
};

export default RangeInput;
