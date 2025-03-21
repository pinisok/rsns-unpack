export type CardAIFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	thinkInterval: number;
	cardAISensorList: any[];
	commonCardAvailableConditionList: Array<{
		cardAvailableConditionId: number;
	}>;
	commonWeightAdjustmentList: any[];
	commonActionList: any[];
}>