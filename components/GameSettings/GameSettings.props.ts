import { GameOrder } from '../../types/GameOrder';

export interface GameSettingsProps {
  itemsCountIdx: number;
  valuesIdx: number;
  order: GameOrder;
  onChangeItemsCount: (value: number) => void;
  onChangeValues: (value: number) => void;
  onChangeOrder: (value: GameOrder) => void;
  onStart: () => void;
}
