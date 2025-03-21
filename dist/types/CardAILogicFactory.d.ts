export type CardAILogicFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	condition?: string;
	targetType?: string;
	attributeType?: string;
	numberType?: string;
}>