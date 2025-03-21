export type HomeLineFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	lineMsg: Array<{
		id: number;
		lineMax: number;
		lineMin: number;
	}>;
	mapNeedleList?: Array<{
		id: number;
	}>;
	forceNeedleList?: Array<{
		id: number;
	}>;
	lineQuestList: Array<{
		id: number;
	}>;
	station01: number;
	station02: number;
	distance: number;
	sceneGroup: number;
	bgmId: number;
	bgmId2: number;
	playerLevel: number;
	questId: number;
	specifiedLevelId: number;
	lineLevelList: Array<{
		distance: number;
		id: number;
		weight: number;
	}>;
	triggerNumMin: number;
	triggerNumMax: number;
	lineBgList: Array<{
		LineBgid: number;
		distance0: number;
	}>;
	LineEnemyLv: number;
	LineEnemyLvRan?: number;
	LineEnemyRn: number;
	LineWeatherRate: number;
	LineWeatherList: Array<{
		LineWTid: number;
	}>;
	eventHpRatio?: number;
	enemyLevelMin: number;
	boxMin: number;
	boxMax: number;
	boxPolluteNum?: number;
	boxList: Array<{
		distance: number;
		id: number;
		weight: number;
	}>;
	AreaTipList: Array<{
		disMax: number;
		disMin: number;
		id: number;
	}>;
	AttractionList: Array<{
		disMax: number;
		disMin: number;
		id: number;
	}>;
	areaList: Array<{
		areaId: number;
		disInterval: number;
		disMax: number;
		disMin: number;
	}>;
	cityList: Array<{
		buildingId: number;
		cityId: number;
	}>;
	wayPointList: Array<{
		x: number;
		y: number;
	}>;
}>