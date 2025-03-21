export type AdvLevelFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	mapPath: string;
	cost: number;
	minMine: number;
	maxMine: number;
	mineReward: any[];
}>