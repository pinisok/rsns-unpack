export type UnitActionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	isCharge?: boolean;
	actionLevel: string;
	isUseTargetFilter?: boolean;
	targetType: string;
	targetTagList?: Array<{
		tagId: number;
	}>;
	halfWidth_SN?: number;
	attributeType?: string;
	condition?: string;
	numberType?: string;
	number_SN?: number;
	buffTypeFO?: number;
	buffFO?: number;
	buffJudgeType?: string;
	buffLevel?: number;
	filterStance?: string;
	filterPosition?: string;
	isAimSelf?: boolean;
	targetCount?: number;
	distance_SN: number;
	radius_SN: number;
	damageHitBuffList?: any[];
	healHitBuffList?: any[];
	cdFrame: number;
	isUseBigNumber: boolean;
	stateIdList: Array<{
		bPlayTimes?: boolean;
		stateId: number;
		timesRate_SN?: number;
		timesSource?: string;
		customDataTag?: string;
	}>;
	isSkill?: boolean;
	tagType?: string;
	backShakeFrame?: number;
}>