export type ActivityFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	showUI: string;
	bgPath: string;
	bgColor: string;
	npcId: number;
	helpId: number;
	voiceActivity: number;
	correspondingCity: any[];
	correspondingBuild: any[];
	isJoin: boolean;
	questId: number;
	unlockTips?: number;
	isTime: boolean;
	startTime: string;
	endTime: string;
	rewardEndTime: string;
	rewardPreviewList: Array<{
		id: number;
	}>;
	activityStoreList: Array<{
		id: number;
	}>;
	joinPlotId: number;
	joinQuestId: number;
	sequenceList?: Array<{
		skipId: number;
		startTime: string;
		questId?: number;
	}>;
	isChangeCOCQuest?: boolean;
	stationList?: Array<{
		endTime: string;
		listId: number;
		startTime: string;
		stationId: number;
	}>;
	isChangeQuotation?: boolean;
	goodsList?: Array<{
		buyQuotationMax: number;
		buyQuotationMin: number;
		buyStationList: number;
		goodsId: number;
		sellQuotationMax: number;
		sellQuotationMin: number;
		sellStationList: number;
		endTime?: string;
		startTime?: string;
	}>;
	tradeTypeList?: Array<{
		icon: string;
		seriesName: string;
		targetNum: number;
		typeEnum: string;
		typeId: number;
	}>;
	battleList?: Array<{
		commonBg: string;
		icon: string;
		lockDes: string;
		lockedBg: string;
		missionId: number;
	}>;
	ServerProgressList?: Array<{
		buff: number;
		buyIcon: string;
		buyNum: number;
		buyPng: string;
		id: number;
		revenueIcon: string;
		revenueNum: number;
		revenuePng: string;
	}>;
	PersonalProgressList?: Array<{
		id: number;
	}>;
	activityCardPack: number;
	activityGoods?: number;
	signinId?: number;
	activityRankList?: Array<{
		id: number;
	}>;
	constructionItemId?: number;
	constructionLimit?: number;
	allConstructionList?: Array<{
		construction: number;
		id: number;
		questId?: number;
		tipsId?: number;
	}>;
	personalConstructionList?: Array<{
		construction: number;
		id: number;
		questId: number;
		tipsId: number;
	}>;
	constructionEndList?: Array<{
		id: number;
		num: number;
	}>;
	constructionPreviewList?: Array<{
		icon: string;
		id: number;
	}>;
	skipStationStart?: number;
	skipStationEnd?: number;
	levelReward?: number;
	isOnly?: number;
	recycleCityList?: Array<{
		cityId: number;
		endTime: string;
		highCoefficient: number;
		materialList: number;
		startTime: string;
	}>;
	isChangeLeaflet?: boolean;
	isChangePond?: boolean;
	activityLeafletList?: Array<{
		desc: string;
		endTime: string;
		leafletNum: number;
		startTime: string;
	}>;
	activityPassengerList?: Array<{
		activityPond: number;
		activityPondNum: number;
		cityId: number;
		desc: string;
		endTime: string;
		startTime: string;
	}>;
	activityGradeList?: Array<{
		endTime: string;
		id: number;
		startTime: string;
	}>;
	interviewNpcList?: Array<{
		bgPng: string;
		endTime: string;
		id: number;
		startTime: string;
	}>;
	titleTextList?: Array<{
		endTime: string;
		id: number;
		startTime: string;
	}>;
	circleTextList?: Array<{
		endTime: string;
		id: number;
		startTime: string;
	}>;
	signIcon?: string;
	timeLineColor?: string;
	titleColor?: string;
	daySignedColor?: string;
	daySignColor?: string;
	dayAligningType?: string;
	signedBG?: string;
	signBG?: string;
	claimedIcon?: string;
	unClaimedIcon?: string;
	notTimeBtn?: string;
	signBtn?: string;
	signedBtn?: string;
	notTimeBottom?: string;
	signBottom?: string;
	signedBottom?: string;
	signMask?: string;
	rewardBG?: string;
	rewardSBG?: string;
	eventType?: string;
	eventRandomWeek?: Array<{
		bgPng: string;
		circleText: number;
		eventText: number;
		id: number;
		npcId: number;
		titleText: number;
		tvBgPng: string;
		weight: number;
	}>;
	continueTime?: number;
	eventFixedWeek?: Array<{
		bgPng: string;
		circleText: number;
		endTime: string;
		eventBuff: number;
		eventText: number;
		npcId: number;
		startTime: string;
		titleText: number;
	}>;
	skipQuestLimit?: number;
	levelQuestLimit?: number;
	levelTypeList?: Array<{
		id: number;
		startTime: string;
	}>;
}>