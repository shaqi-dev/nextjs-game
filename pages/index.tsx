import { useEffect, useState, useCallback } from "react";

import Background from "../components/Background";
import GameSettings from "../components/GameSettings";

import { GameMode } from "../types/GameMode";
import { GameStyle } from "../types/GameStyle";
import { GameOrder } from "../types/GameOrder";

import { backgrounds } from "../utils/backgrounds";
import { randomEnum } from "../utils/randomEnum";

export default function Home() {
	const [gameMode, setGameMode] = useState<GameMode>(GameMode.START);
	const [gameStyle, setGameStyle] = useState<GameStyle>(GameStyle.CANDIES);
	const [gameOrder, setGameOrder] = useState<GameOrder>(GameOrder.ASC);
	const [itemsCountIdx, setItemsCountIdx] = useState<number>(0);
	const [valuesIdx, setValuesIdx] = useState<number>(0);

	const backgroundImage =
		gameMode === GameMode.START
			? backgrounds.startScreen
			: backgrounds.game[gameStyle];

	const handleChangeItemsCountIdx = useCallback(
		(value: number) => setItemsCountIdx(value),
		[]
	);

	const handleChangeValuesIdx = useCallback(
		(value: number) => setValuesIdx(value),
		[]
	);

	const handleChangeOrder = useCallback(
		(value: GameOrder) => setGameOrder(value),
		[]
	);

	const handleStartGame = useCallback(() => {
		setGameStyle(randomEnum(GameStyle));
		setGameMode(GameMode.GAME);
	}, []);

	return (
		<Background image={backgroundImage}>
			{gameMode === GameMode.START && (
				<GameSettings
					itemsCountIdx={itemsCountIdx}
					valuesIdx={valuesIdx}
					order={gameOrder}
					onChangeItemsCount={handleChangeItemsCountIdx}
					onChangeValues={handleChangeValuesIdx}
					onChangeOrder={handleChangeOrder}
					onStart={handleStartGame}
				/>
			)}

			{gameMode === GameMode.GAME && (
				<div>
					{itemsCountIdx} : {valuesIdx} : {gameOrder}
				</div>
			)}
		</Background>
	);
}
