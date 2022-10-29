import { ChangeEvent, FC } from "react";

import RangeInput from "./RangeInput";

import { GameSettingsProps } from "./GameSettings.props";
import {
	OuterRect,
	InnerRect,
	RangeOptions,
	OrderOptions,
	OrderButton,
	StartButton,
} from "./GameSettings.styled";

import { GameOrder } from "../../types/GameOrder";
import { itemsCount, values } from "../../utils/rangeSettingsOptions";

const GameSettings: FC<GameSettingsProps> = ({
	itemsCountIdx,
	valuesIdx,
	order,
	onChangeItemsCount,
	onChangeValues,
	onChangeOrder,
	onStart,
}) => {
	const handleSetItemsCountIdx = (e: ChangeEvent<HTMLInputElement>) =>
		onChangeItemsCount(+e.target.value);

	const handleSetValuesIdx = (e: ChangeEvent<HTMLInputElement>) =>
		onChangeValues(+e.target.value);

	const handleSetOrderASC = () => onChangeOrder(GameOrder.ASC);
  
	const handleSetOrderDESC = () => onChangeOrder(GameOrder.DESC);

	return (
		<OuterRect>
			<InnerRect>
				<RangeOptions>
					<RangeInput
						id="items-count"
						label="Кол-во предметов"
						options={itemsCount}
						width="366px"
						defaultValue={itemsCountIdx}
						onChange={handleSetItemsCountIdx}
					/>
					<RangeInput
						id="values"
						label="Значения"
						options={values}
						width="531px"
						defaultValue={valuesIdx}
						onChange={handleSetValuesIdx}
					/>
				</RangeOptions>
				<OrderOptions>
					<OrderButton
						disabled={order === GameOrder.ASC}
						onClick={handleSetOrderASC}>
						По возрастанию
					</OrderButton>
					<OrderButton
						disabled={order === GameOrder.DESC}
						onClick={handleSetOrderDESC}>
						По убыванию
					</OrderButton>
				</OrderOptions>
				<StartButton onClick={() => onStart()}>Играть</StartButton>
			</InnerRect>
		</OuterRect>
	);
};

export default GameSettings;
