export type CardAIConditionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	isInvert?: boolean;
	color?: string;
	conditionList?: Array<{
		conditionId: number;
	}>;
	logicId?: number;
}>