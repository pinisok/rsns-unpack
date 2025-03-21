export type LevelChainFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	levelChainName: string;
	index: string;
	description: string;
	chapterId: number;
	preconditionId: number;
	energy: number;
	levelChainList: any[];
	characterExp: number;
	playerExp: number;
	firstPassAward: any[];
	dropNumList: any[];
	dropList: any[];
}>