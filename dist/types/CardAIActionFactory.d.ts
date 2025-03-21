export type CardAIActionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	findTargetGSId?: number;
	isUseGSCoordinateOnly?: boolean;
}>