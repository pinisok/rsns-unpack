export type AwakeFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	portraitLevel: number;
	levelMax: number;
	equipmentSlotIndex: number;
	cardIndex: number;
	materialList: Array<{
		itemId: number;
		num: number;
	}>;
	level: number;
	desc: string;
	skillChangeList: any[];
	skillParamOffsetList: any[];
}>