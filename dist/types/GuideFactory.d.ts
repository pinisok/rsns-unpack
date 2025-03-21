export type GuideFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	isRunInterrupt: boolean;
	isInterruptedSkip: boolean;
	assignGuideId?: number;
	playerLevel: number;
	levelFinishedFO: number;
	reachStation: number;
	completeQuest: number;
	curStationRepLvLimit: number;
	triggerMeetEvent: number;
	triggerPanelName: string;
	triggerProtocol: string;
	triggerQuest: number;
	apiName: string;
	orderList: Array<{
		orderId: number;
	}>;
	isEndLoading?: boolean;
	scene?: string;
}>