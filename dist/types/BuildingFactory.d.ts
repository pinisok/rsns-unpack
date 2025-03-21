export type BuildingFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	uiPath: string;
	npcId: number;
	favorability: boolean;
	stationId: number;
	sellList?: any[];
	acquisitionList?: any[];
	isWarehouse?: boolean;
	warehousePrestige?: number;
	buyPrice?: any[];
	buyReward?: any[];
	tradeRankList?: any[];
	name?: string;
	firstPlotId?: number;
	bgPath?: string;
	bgColor?: string;
	helpId?: number;
	rankId?: number;
	createQuestList?: Array<{
		id: number;
		repCondition: number;
	}>;
	triggerPlot?: number;
	triggerQuest?: number;
	tagOnPath?: string;
	tagOffPath?: string;
	expelBgPath?: string;
	offerPrestige?: number;
	offerQuestList?: Array<{
		bossId: number;
		id: number;
		isRepetition: boolean;
		weight: number;
	}>;
	shareLevelNumMax?: number;
	changeRefreshTime?: number;
	returnCoefficient?: number;
	exchangeBuildId?: number;
	eventList?: Array<{
		activityId: number;
		endTime: string;
		eventId: number;
		eventType: string;
		questId: number;
		startTime: string;
		isAuto?: boolean;
	}>;
	petStoreList?: any[];
	petRecycleStoreList?: any[];
	buildingIconPath?: string;
	correspondingActivity?: number;
	integralCoefficient?: number;
	integralRewardList?: Array<{
		id: number;
		index: number;
		integral: number;
	}>;
	rubbishRankList?: Array<{
		id: number;
	}>;
	playerLevel?: number;
	exchangeOpenPageList?: Array<{
		icon: string;
		isStore: boolean;
		isTalk: boolean;
		name: string;
		showUI: string;
		uiPath?: string;
	}>;
	exchangeStoreList?: Array<{
		id: number;
	}>;
	exchangeWeaponList?: Array<{
		id: number;
	}>;
	isShowConstruct?: boolean;
	isShowReputation?: boolean;
	exchangeName?: string;
	buildingPath?: string;
	exchangePath?: string;
	pagePath?: string;
	bottomPath?: string;
	exchangeAffirmPath?: string;
	exchangeCompletePath?: string;
	orderNumMax?: number;
	orderNumMin?: number;
	activityOrderList?: Array<{
		id: number;
		limitNum: number;
		onceNum: number;
		rewardId: number;
	}>;
	orderTitle?: number;
	orderDes?: number;
	orderBgPath?: string;
	levelIconPath?: string;
	buildLevelName?: number;
	constructionLevelList?: Array<{
		allConstruction: number;
		bossId: number;
		conditionId: number;
		icon: string;
		id: number;
		levelPng: string;
		levelPngLock: string;
		levelX: number;
		levelY: number;
	}>;
	initCOCQuestList?: any[];
	cocStoreList?: any[];
	limitNum?: number;
	drinkCost?: any[];
	barStoreList?: any[];
	drinkVideo?: string;
	openPageList?: any[];
	namePlace?: string;
	placeType?: number;
	namePlaceIcon?: string;
	PlaceDesc?: number;
	unlockPlace?: number;
	placeWeight?: number;
	passengerTypeList?: Array<{
		id: number;
		weight: number;
	}>;
	passengerTagList?: Array<{
		id: number;
		weight: number;
	}>;
}>