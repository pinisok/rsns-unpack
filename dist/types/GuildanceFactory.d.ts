export type GuildanceFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	conditionList: Array<{
		conditionID: number;
	}>;
	orderList: Array<{
		orderID: number;
	}>;
}>