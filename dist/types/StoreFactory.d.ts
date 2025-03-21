export type StoreFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	storeName: string;
	unlockConditions: boolean;
	conditions: number;
	pngSelect: string;
	pngNotSelect: string;
	shopList: Array<{
		id: number;
		weight: number;
	}>;
	storeType: string;
	showUI: string;
	capacityType: Array<{
		id: number;
	}>;
	refreshType: string;
	isTime?: boolean;
	startTime?: string;
	endTime?: string;
	currencyShow?: Array<{
		click: string;
		id: number;
	}>;
	maxShopNum?: number;
	autoRefresh?: boolean;
	refreshTimeList?: Array<{
		refreshTime?: string;
	}>;
	moneyList?: Array<{
		moneyID: number;
		moneyNum: number;
	}>;
	freeRefreshNum?: number;
	TextLockId?: number;
	commodityFixedList?: Array<{
		id: number;
	}>;
	isRecordTimes?: boolean;
	rewardList?: any[];
	isStationRefresh?: boolean;
	recycleShopList?: Array<{
		id: number;
	}>;
	recommendList?: Array<{
		comSequence: number;
		funcId: number;
		id: number;
		name: string;
		otherUI: string;
		png: string;
		sequence: number;
		storeId: number;
		tabPng: string;
		type: string;
		isBattlePass?: boolean;
	}>;
	activityId?: number;
}>