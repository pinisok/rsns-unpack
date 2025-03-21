export type QuestTrackFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	stateList?: Array<{
		nodePath: string;
		note: string;
		offsetX: number;
		offsetY: number;
		prefab: string;
		stateNo: number;
		tipsType?: string;
		bubbleType?: string;
		mId?: number;
	}>;
	keyList?: Array<{
		factoryVal: number;
		intVal: number;
		key: string;
		stringVal: string;
	}>;
	btnList?: Array<{
		btnPath: string;
		note: string;
	}>;
	apiList?: Array<{
		api: string;
		note: string;
	}>;
}>