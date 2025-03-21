export type HomeWeaponFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	cannonModel: string;
	hp?: number;
	power?: number;
	hpLoss?: number;
	fixCoin?: number;
	hitEventType?: Array<{
		id: number;
	}>;
	name: string;
	effectStyleType?: string;
	effectType?: string;
	effectTypeEffect?: number;
	specialEffects: string;
	timeLineEffect?: number;
	XEffects?: number;
	YEffects?: number;
	ZEffects?: number;
	isCost: boolean;
	des: string;
	createDes: string;
	quality: string;
	typeWeapon: number;
	weaponType: string;
	normalEntryList: Array<{
		id: number;
	}>;
	growUpEntryList: Array<{
		id: number;
	}>;
	randomSkillNum: number;
	randomSkillList: any[];
	coreList: Array<{
		id: number;
		level: number;
	}>;
	materialList: Array<{
		level: number;
		list: number;
	}>;
	imagePath: string;
	tipsPath: string;
	configWinPercent?: number;
	configNumMin?: number;
	configNumMax?: number;
	TrainWeaponMakeUp: Array<{
		id: number;
		num: number;
	}>;
	goldCost: number;
	Getway: any[];
	TrainWeaponTips?: any[];
	percentWin?: number;
	configNumPer?: number;
	isFirst?: boolean;
	WeaponLow?: number;
	WeaponTired?: number;
}>