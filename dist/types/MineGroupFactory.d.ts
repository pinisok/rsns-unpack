export type MineGroupFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	mines: Array<{
		id: number;
	}>;
	range: number;
}>