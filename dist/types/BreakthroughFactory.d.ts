export type BreakthroughFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	name?: string;
	path?: string;
	attriDetialList?: any[];
	attributeList: Array<{
		attributeType: string;
		numType: string;
		num_SN: number;
	}>;
	materialList: Array<{
		itemId: number;
		num: number;
	}>;
	skillList?: Array<{
		skillId: number;
	}>;
	tempdesc: string;
	desc: string;
	skillChangeList?: Array<{
		newSkillId: number;
		oldSkillId: number;
	}>;
	skillParamOffsetList?: Array<{
		skillId: number;
		tag: string;
		value_SN: number;
	}>;
}>