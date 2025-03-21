export type ValuableFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	costId?: string;
	name?: string;
	describe?: string;
	iconPath?: string;
	buyPath?: string;
	isTips?: boolean;
	rewardList?: Array<{
		id: number;
		num: number;
	}>;
	isFirst?: boolean;
	rewardFirstList?: Array<{
		id: number;
		num: number;
	}>;
	rewardFollowList?: Array<{
		id: number;
		num: number;
	}>;
	buyType?: string;
	value?: number;
	buyItemList?: any[];
	superValue?: number;
	purchase?: boolean;
	purchaseNum?: number;
	limitBuyType?: string;
	isTime?: boolean;
	startTime?: string;
	endTime?: string;
	isBuyCondition?: boolean;
	gradeCondition?: number;
	ismonthCard?: boolean;
	showList?: Array<{
		id: number;
		num: number;
	}>;
	isCharacterSkin?: boolean;
	BattlePassLevel?: number;
	correspondStore?: number;
}>