export type ListFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	rewardList?: Array<{
		id: number;
		num?: number;
		weight?: number;
		BuyTimes?: number;
	}>;
	materialList?: Array<{
		id: number;
		num: number;
	}>;
	goodsList?: Array<{
		id: number;
		num: number;
	}>;
	chapterName?: string;
	condition?: number;
	width?: number;
	height?: number;
	questList?: Array<{
		id: number;
		x: number;
		y: number;
	}>;
	skillBuffList?: Array<{
		id: number;
	}>;
	electricMaterialList?: Array<{
		id: number;
		num: number;
	}>;
	gradeExpList?: Array<{
		num: number;
	}>;
	offerExpList?: Array<{
		num: number;
	}>;
	awardList?: Array<{
		id: number;
		num: number;
	}>;
	mainStoreList?: Array<{
		id: number;
	}>;
	areaStationList?: Array<{
		id: number;
	}>;
	rareGoodsNum?: number;
	rareGoodsList?: Array<{
		id: number;
	}>;
	areaLevelList?: any[];
	spineList?: Array<{
		note: string;
		spinePath: string;
		weight: number;
	}>;
	repRewardList?: Array<{
		id: number;
		num: number;
	}>;
	listType?: string;
	dialogList?: Array<{
		id: number;
		reputation: number;
	}>;
	enemyList?: Array<{
		awakeLv: number;
		controllerId: number;
		enemyId: number;
		lv: number;
		resonanceLv: number;
		weight: number;
	}>;
	drinkList?: Array<{
		id: number;
		num: number;
	}>;
	drinkBuffList?: Array<{
		id: number;
		weight: number;
	}>;
	investorCostList?: Array<{
		id: number;
		num: number;
	}>;
	investorRewList?: Array<{
		id: number;
		num: number;
	}>;
	defaultCreatureList?: Array<{
		id: number;
		num: number;
	}>;
	accumulateList?: Array<{
		achieveList: number;
		id: number;
		name: string;
		png: string;
		stageName: string;
		sumCount: number;
	}>;
	achieveRewardList?: Array<{
		id: number;
		num: number;
	}>;
	achieveStartList?: Array<{
		id: number;
	}>;
	eventList?: Array<{
		distance: number;
		id: number;
	}>;
	boxList?: Array<{
		distance: number;
		id: number;
	}>;
	seriesType?: string;
	seriesCompleteNum?: number;
	seriesName?: string;
	sequenceName?: number;
	expelNum?: number;
	deterrence?: number;
	expelRewardList?: Array<{
		expel: number;
		id: number;
	}>;
	sideQuestList?: Array<{
		id: number;
		lv?: number;
		weight: number;
	}>;
	dayQuestList?: Array<{
		comNum: number;
		id: number;
		lv?: number;
		weight: number;
	}>;
	buildingId?: number;
	eventType?: string;
	eventDeterrence?: number;
	eventColoudness?: number;
	eventLevelList?: Array<{
		id: number;
		weight: number;
	}>;
	stationSceneList?: Array<{
		bgmId: number;
		dev: number;
		postProcessingPath: string;
		sceneGroup: number;
		sceneWidth: number;
		stationScene: string;
	}>;
	IncludeParagraph?: Array<{
		id: number;
	}>;
	starWeightList?: Array<{
		id: string;
		weight: number;
	}>;
	questList1?: Array<{
		id: number;
		weight: number;
	}>;
	questList2?: Array<{
		id: number;
		weight: number;
	}>;
	questList3?: Array<{
		id: number;
		weight: number;
	}>;
	questList4?: Array<{
		id: number;
		weight: number;
	}>;
	questList5?: Array<{
		id: number;
		weight: number;
	}>;
	quality?: string;
	name?: string;
	iconPath?: string;
	tipsPath?: string;
	des?: string;
	dropList?: Array<{
		id: number;
		weight: number;
	}>;
	OilMaterialList?: Array<{
		id: number;
		num: number;
	}>;
	Rankname?: string;
	icon?: string;
	Unlockright?: Array<{
		id: string;
	}>;
	reward?: Array<{
		id: number;
		num: number;
	}>;
	namePlace?: string;
	placeType?: number;
	namePlaceIcon?: string;
	PlaceDesc?: number;
	unlockPlace?: number;
	placeWeight?: number;
	passageTypeList?: Array<{
		id: number;
		weight: number;
	}>;
	passengerTypeList?: Array<{
		id: number;
		weight: number;
	}>;
	passageTagList?: Array<{
		id: number;
		weight: number;
	}>;
	passengerTagList?: Array<{
		id: number;
		weight: number;
	}>;
	boxGoodsList?: Array<{
		id: number;
		max: number;
		min: number;
		weight: number;
	}>;
	trainLook?: Array<{
		id: number;
	}>;
	trainName?: number;
	initOrderList?: any[];
	OrderList?: Array<{
		id: number;
		weight: number;
	}>;
	stageRewardList?: Array<{
		construct: number;
		id: number;
		num: number;
	}>;
	textTipsList?: Array<{
		id: number;
	}>;
	skillList?: Array<{
		skillId: number;
		weight: number;
	}>;
	timeStart?: number;
	timeEnd?: number;
	environmentList?: Array<{
		id: number;
	}>;
	dataTab?: Array<{
		id: number;
		level: number;
		name: string;
	}>;
	coverPage?: string;
	interfaceUrl?: string;
	EquipmentEntryList?: Array<{
		id: number;
		weight: number;
	}>;
	isIncome?: boolean;
	comfort?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	plantScores?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	fishScores?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	petScores?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	foodScores?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	playScores?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	medicalScores?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	arm?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	clean?: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	CvName1?: string;
	CvName2?: string;
	TrustAudio?: Array<{
		Audio1: number;
		Audio2: number;
		AudioName: string;
		StoryText: string;
		UnlockLevel: number;
		audioType?: string;
	}>;
	AudioM?: Array<{
		Audio1: number;
		Audio2: number;
		AudioName: string;
		StoryText: string;
		UnlockLevel: number;
	}>;
	AudioF?: Array<{
		Audio1: number;
		Audio2: number;
		AudioName: string;
		StoryText: string;
		UnlockLevel: number;
	}>;
	BattleAudio?: Array<{
		AudioName: string;
		AudioType: string;
		StoryText: string;
		id1: number;
		id2: number;
	}>;
	ResumeList?: any[];
	StoryList?: Array<{
		Title: string;
		UnlockLevel: number;
		des: string;
	}>;
	Restype?: Array<{
		Language: string;
		isExistent: boolean;
	}>;
	animList?: Array<{
		name: string;
	}>;
	normalTagList?: Array<{
		id: number;
	}>;
	leveldropList?: Array<{
		id: number;
		numMax: number;
		numMin: number;
		percent: number;
	}>;
	breakItemList?: Array<{
		id: number;
		num: number;
	}>;
	EngineRewardList?: Array<{
		id: number;
		num: number;
	}>;
	passengerAction1?: Array<{
		action: string;
		id: number;
	}>;
	passengerAction2?: Array<{
		action: string;
		id: number;
	}>;
	passengerAction3?: Array<{
		action: string;
		id: number;
	}>;
	passengerAction4?: Array<{
		action: string;
		id: number;
	}>;
	passengerAction5?: Array<{
		action: string;
		id: number;
	}>;
	passengerAction6?: Array<{
		action: string;
		id: number;
	}>;
	eventWeightList?: Array<{
		id: number;
		weight: number;
	}>;
	LevelConditionList?: any[];
	QuestConditionList?: Array<{
		condition: number;
	}>;
	ItemConditionList?: any[];
	shopList?: Array<{
		id: number;
		weight: number;
	}>;
	priceList?: Array<{
		num: number;
	}>;
	lvCondition?: number;
	FestivalReward?: Array<{
		id: number;
		num: number;
	}>;
	clickEventList?: Array<{
		id: number;
		pos_x: number;
		pos_y: number;
		pos_z: number;
		weight: number;
		icon_x?: number;
		icon_y?: number;
		isShowUI?: boolean;
	}>;
	frontAnimList?: Array<{
		animName: string;
	}>;
	backAnimList?: Array<{
		animName: string;
	}>;
	helpTitle?: number;
	help?: Array<{
		tadId: number;
		txtId: number;
	}>;
	enemyRandWaveList?: Array<{
		id: number;
		weight: number;
	}>;
	balloonList?: Array<{
		ratio: number;
	}>;
	investChoose?: Array<{
		id: number;
		weight: number;
	}>;
	polluteRegularList?: Array<{
		id: number;
		index: number;
	}>;
	adList?: Array<{
		id: number;
		weight: number;
	}>;
	trainWeaponList?: Array<{
		id: number;
	}>;
	lock?: number;
	notebook?: Array<{
		id: number;
	}>;
	cover?: string;
	achievementList?: Array<{
		englishPic: string;
		icon: string;
		id: number;
	}>;
	needleInMapList?: Array<{
		iconPosx: number;
		iconPosy: number;
		id: number;
		mapIconPath: string;
	}>;
	skipStationStart?: number;
	skipQuestList?: Array<{
		id: number;
	}>;
	skipStationEnd?: number;
	lvList?: Array<{
		lv: number;
	}>;
	packList?: Array<{
		name: string;
		packId: number;
		png: string;
	}>;
	collectionCardList?: Array<{
		id: number;
	}>;
}>