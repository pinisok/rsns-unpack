export type TalentFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	name: string;
	desc: string;
	skillList: Array<{
		skillId: number;
	}>;
	path: string;
	awakeLv: number;
	attributeList: Array<{
		attributeType: string;
		numType: string;
		num_SN: number;
	}>;
	tempdesc: string;
	isInformalData?: boolean;
	attriDetialList?: any[];
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