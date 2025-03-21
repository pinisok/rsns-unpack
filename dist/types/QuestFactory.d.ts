export type QuestFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	describe: string;
	story: string;
	questType: string;
	sort: number;
	isShowProgress?: boolean;
	isShowUnlock?: boolean;
	isShowAchieveProgress?: boolean;
	client?: number;
	startStation: number;
	endStationList: Array<{
		id?: number;
		weight?: number;
	}>;
	traceList?: Array<{
		apiListId?: number;
		btnListId?: number;
		traceId: number;
		uiPath: string;
	}>;
	isSwitchUI: boolean;
	switchUI: string;
	preQuestId?: number;
	startLevel?: number;
	conditionList: Array<{
		key: string;
		val: string;
	}>;
	num: number;
	islockAddProgress: boolean;
	isAutoComplete?: boolean;
	checkComplete?: boolean;
	parentQuest?: number;
	childQuestList?: Array<{
		id: number;
	}>;
	rewardsList: Array<{
		id: number;
		num: number;
	}>;
	nextQuest: Array<{
		id: number;
	}>;
	changeCityStateList: Array<{
		id: number;
		state: number;
	}>;
	mailList?: Array<{
		id: number;
	}>;
	isEvent: boolean;
	isOverwriteEvent: boolean;
	eventList: Array<{
		idLine: number;
		idList: number;
	}>;
	environmentList?: Array<{
		idLine: number;
		idMsg: number;
	}>;
	isTime?: boolean;
	startTime?: string;
	endTime?: string;
	correspondActivity?: number;
	isShowReceive?: boolean;
	isAutoTrace?: boolean;
	giveUp?: boolean;
	reputationList?: Array<{
		id: number;
		num: number;
	}>;
	isInitQuest?: boolean;
	questId?: number;
	development?: number;
	investment?: number;
	trainLevel?: number;
	cocQuestType?: string;
	goodsList?: Array<{
		id: number;
		num: number;
	}>;
	cityList?: Array<{
		id: number;
	}>;
	passengerList?: Array<{
		id: number;
		num: number;
		tag: number;
	}>;
	timeLimit?: number;
	achievePoint?: number;
	achieveList?: number;
	achievePng?: string;
	requireItemList?: Array<{
		id: number;
		num: number;
	}>;
	constructLimit?: number;
	unlockCity?: number;
	station?: number;
	activityId?: number;
	preQuest?: Array<{
		id: number;
	}>;
	preLevel?: Array<{
		id: number;
	}>;
	buffActivate?: number;
	showType?: string;
}>