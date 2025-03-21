export type HomeStationFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	nameEN: string;
	des: string;
	attachedToCity: number;
	force: number;
	isShowRep: boolean;
	sort: number;
	textArriveFirst: number;
	iconPath: string;
	cityMapIconPath: string;
	voiceName: number;
	voiceDeparture: number;
	voiceDeparturePassenger: number;
	voiceWillArrive: number;
	voiceWillArrivePassenger: number;
	voiceArrive: number;
	voiceArrivePassenger: number;
	voiceGetIn: number;
	voiceGetInPassenger: number;
	defaultDevelop?: number;
	addDevelop?: number;
	developUpperLimit?: number;
	playerLevel: number;
	questId: number;
	specifiedLevelId: number;
	constructionActivityId: number;
	itemId: number;
	isBanStop: boolean;
	banStopTips: string;
	lockStationQuestList: Array<{
		id: number;
	}>;
	cityStateList: Array<{
		cityMapId: number;
		dungeonId: number;
		name: string;
		sceneId: number;
		state: number;
		recommendLevel?: number;
	}>;
	timeLineList: Array<{
		id: number;
	}>;
	pullOutTimeLineList: Array<{
		id: number;
	}>;
	pos: number;
	isShowInMap: boolean;
	x: number;
	y: number;
	mapIconPath: string;
	nodePath: string;
	showGoodsQuest: number;
	repRewardList?: Array<{
		bargainNum: number;
		bargainSuccessRate: number;
		buyNum: number;
		cocAutoRefreshNum: number;
		cocQuestList: number;
		desc: string;
		flagPng?: string;
		honorPng: string;
		id: number;
		offerAutoRefreshNum: number;
		peopleName: string;
		repNum: number;
		revenue: number;
		riseNum: number;
		wareNum: number;
	}>;
	enterStationPlotList: any[];
	refreshBuildList?: Array<{
		id: number;
	}>;
	cityHallName?: string;
	cityPrestige?: number;
	investList?: Array<{
		developNum: number;
		id: number;
		limitNum: number;
		name: string;
		repGrade: number;
	}>;
	tradeRankList?: Array<{
		id: number;
	}>;
	sellList: Array<{
		id: number;
	}>;
	acquisitionList: Array<{
		id: number;
	}>;
	bargainSpinePath?: string;
	actionM?: string;
	actionW?: string;
	action2M?: string;
	action2W?: string;
	isWarehouse?: boolean;
	warehousePrestige?: number;
	buyPrice?: Array<{
		id: number;
		num: number;
	}>;
	buyReward?: Array<{
		id: number;
		num: number;
	}>;
	isCOC?: boolean;
	initCOCQuestList: Array<{
		id: number;
	}>;
	cocStoreList?: Array<{
		id: number;
	}>;
	cocRecycleStoreList?: Array<{
		id: number;
	}>;
	cocExchangeBuildId?: number;
	limitNum?: number;
	drinkCost?: Array<{
		id: number;
		name: string;
		powerReduce: number;
	}>;
	recoverItem?: number;
	barStoreList?: Array<{
		id: number;
	}>;
	drinkVideo?: string;
	isHomeBattleCentre?: boolean;
	openPageList?: Array<{
		icon: string;
		isStore?: boolean;
		isTalk: boolean;
		name: string;
		showUI?: string;
	}>;
	buildingIconPath?: string;
	battleLevelName?: string;
	battleIconPath: string;
	battleLevelList?: Array<{
		difficulty: number;
		id: number;
	}>;
	createOrderList?: Array<{
		constructLimit: number;
		id: number;
	}>;
	refreshTime?: number;
	constructIconPath: string;
	isPark?: boolean;
	parkTicket?: number;
	parkTicketMax?: number;
	divide?: number;
	maxDivide?: number;
	added?: number;
	travelDay?: number;
	tax?: number;
	investTime?: number;
	constructStageList?: Array<{
		basisNum: number;
		constructNum: number;
		desc: string;
		id: number;
		name: string;
		nameBtn: string;
		nameEN: string;
		overNum: number;
		png: string;
		pond: number;
		stagePng: string;
		state: number;
		upperNum: number;
	}>;
	exchangeName?: string;
	exchangeStoreList?: Array<{
		id: number;
	}>;
	exchangeIconPath?: string;
	exchangePagePath?: string;
	exchangeBottomPath?: string;
	exchangeAffirmPath?: string;
	exchangeCompletePath?: string;
	saleName?: string;
	materialRecycleList?: Array<{
		id: number;
	}>;
	correspondingConstruction?: number;
	saleBottomPath?: string;
	saleHighPricePath?: string;
	petStoreList?: Array<{
		id: number;
	}>;
	petRecycleStoreList?: Array<{
		id: number;
	}>;
	keepSingleMealList?: Array<{
		id: number;
	}>;
	keepTeamMealList?: Array<{
		id: number;
	}>;
	inviteTimes?: number;
	isLeaflet?: boolean;
	leafletUnlock?: number;
	leafletMap?: string;
	order?: number;
	cityLeafletLest?: Array<{
		id: number;
	}>;
	isAd?: boolean;
	adUnlock?: number;
	trainList?: Array<{
		endType: number;
		posStart: number;
		speedAdd: number;
		speedDec: number;
		speedMax: number;
		speedMin: number;
		trainDistance: number;
		trainId: number;
		type: number;
	}>;
	recommendNum: number;
	kmCostList: Array<{
		id: number;
		num: number;
	}>;
	onhookCoefficient: number;
	trainHelpChat: number;
}>