export type GrowthFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	gHp_SN?: number;
	gDef_SN?: number;
	gAtk_SN?: number;
	tag?: string;
	growthTagList?: Array<{
		numSN: number;
	}>;
	multiList?: Array<{
		atkMulty_SN: number;
		defMulti_SN: number;
		hpMulti_SN: number;
	}>;
}>