export type CityMapFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	bgList?: Array<{
		bgPath: string;
		changeTime: string;
		effectListId?: number;
	}>;
	offsetX?: number;
	offsetY?: number;
	bubbleList?: Array<{
		id: number;
		x: number;
		y: number;
	}>;
	isShowRep?: boolean;
	isShowConstruct?: boolean;
	exitId?: number;
	effectList?: Array<{
		effectPath: string;
		weight: number;
	}>;
	name?: string;
	isSpecial?: boolean;
	isInstance?: boolean;
	iconPath?: string;
	nameIconPath?: string;
	effectPath?: string;
	activityId?: number;
	startTime?: string;
	endTime?: string;
	isLock?: boolean;
	func?: string;
	btnType?: string;
	mId?: number;
	uiPath?: string;
	buildingId?: number;
	stationPlace?: number;
	dialogId?: number;
	dungeonId?: number;
	levelId?: number;
	textId?: number;
	npcId?: number;
	bgPath?: string;
	bgColor?: string;
	animLoop?: string;
	animOut?: string;
	displayConditionsList?: Array<{
		condition: string;
		mId: number;
		val: number;
	}>;
	unlockConditionsList?: Array<{
		condition: string;
		textId: number;
		val: number;
	}>;
}>