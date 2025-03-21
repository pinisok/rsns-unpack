export type SkillFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	name: string;
	iconPath: string;
	attriDetialList?: any[];
	tempdescription: string;
	description: string;
	levelUpDescription: string;
	tempdetailDescription: string;
	detailDescription: string;
	desParamList: Array<{
		isPercent: boolean;
		param: string;
	}>;
	skillParamList?: Array<{
		skillRateA_SN?: number;
		skillRateB_SN?: number;
		skillRateC_SN?: number;
		skillRateD_SN?: number;
		skillRateE_SN?: number;
		skillRateF_SN?: number;
		skillRateG_SN?: number;
		skillRateH_SN?: number;
		skillRateI_SN?: number;
		skillRateJ_SN?: number;
		skillRateL_SN?: number;
		skillRateT_SN?: number;
	}>;
	attributeList: Array<{
		attributeType?: string;
		attributeType2?: string;
		attributeType3?: string;
		numberType?: string;
		numberType2?: string;
		numberType3?: string;
		value2_SN?: number;
		value3_SN?: number;
		value_SN?: number;
	}>;
	tagId?: number;
	tagFilterList?: Array<{
		tagId: number;
	}>;
	tagFilterType?: string;
	buffId?: number;
	temptypeStr: string;
	typeStr: string;
	typeColor: string;
	CommonNum?: number;
	floatNum?: number;
	ExSkillList?: Array<{
		ExSkillName: number;
	}>;
	specialTagList?: Array<{
		specialTag: number;
	}>;
	tagRemoveList?: Array<{
		tagId: number;
	}>;
	cardID?: number;
	leaderCardEnableBuffId?: number;
	leaderCardConditionList?: Array<{
		leaderCardConditionFO: number;
	}>;
	templeaderCardConditionDesc?: string;
	leaderCardConditionDesc?: string;
	maxAttrSN?: number;
	minAttrSN?: number;
	digitSN?: number;
	isBaseAttr?: boolean;
	tagName?: string;
}>