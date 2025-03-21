export type HomeStationPlaceFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	npcList: Array<{
		id: number;
		isRandom: boolean;
		npcX: number;
		npcZ: number;
		tree: string;
	}>;
	resId: number;
	serverId: number;
	bgm: number;
	npcRefreshList: Array<{
		id: number;
		isRandom: boolean;
		npcX: number;
		npcZ: number;
		tree: string;
	}>;
	entranceList: any[];
	exitList: any[];
	cameraLeft: number;
	cameraRight: number;
	animationCameraX: number;
	animationCameraY: number;
	animationCameraZ: number;
	animationCameraRot: number;
	animationFieldOfView: number;
	animationPrefab: string;
	dressStoreList?: Array<{
		id: number;
	}>;
	keepSingleMealList: Array<{
		id: number;
	}>;
	keepTeamMealList: Array<{
		id: number;
	}>;
	inviteTimes: number;
	titleBuffDesLCZ: number;
	bgBuffDesLCZ: string;
	decBuffDesLCZ: string;
	titleBuffDesMember: number;
	bgBuffDesMember: string;
	decBuffDesMember: string;
	bgTop: string;
	nameSingle: string;
	iconSingleOn: string;
	iconSingleOff: string;
	nameTeam: string;
	iconTeamOn: string;
	iconTeamOff: string;
	bgRight: string;
	picRightTip: string;
	textRightTip: number;
	listPrefab: string;
	bgSettlement: string;
	iconSettlement: string;
	textTitle: number;
	textSettlement: number;
	animeName: string;
	animeEndName: string;
	isPickFood: boolean;
	eventList?: Array<{
		activityId: number;
		bubbleString: string;
		endTime: string;
		eventId: number;
		eventType: string;
		homeQId: number;
		qXPos: number;
		qYPos: number;
		questId: number;
		startTime: string;
		isAuto?: boolean;
	}>;
	bgPhoto?: string;
}>