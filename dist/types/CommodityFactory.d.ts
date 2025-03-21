export type CommodityFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	commodityName: string;
	commodityView: string;
	quality: string;
	commodityItemList?: Array<{
		id: number;
		num: number;
	}>;
	commodityNum: number;
	moneyList?: Array<{
		moneyID: number;
		moneyNum: number;
		correspondPrice?: number;
	}>;
	monetaryView: string;
	discountVariable: number;
	purchase?: boolean;
	purchaseNum?: number;
	firstGifts?: boolean;
	firstGiftsNum?: number;
	commodityFunction?: string;
	isChange: boolean;
	oneTimeMax: number;
	iconPath: string;
	isTime: boolean;
	startTime: string;
	endTime: string;
	isRefresh: boolean;
	initTime: string;
	refreshDay: number;
	limitBuyType: string;
	isBuyCondition: boolean;
	stationCondition: number;
	repGradeCondition: number;
	gradeCondition: number;
	gradeRefresh: number;
	isTriggerTime: boolean;
	continueTime: number;
	extraGiveList: any[];
	recycleItem?: number;
	recycleMoneyList?: Array<{
		moneyID: number;
		moneyNum: number;
	}>;
}>