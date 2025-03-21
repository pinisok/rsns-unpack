export type LevelFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	isMainChapter: boolean;
	chapterId: number;
	skipBattleRestricted: boolean;
	energyStart: number;
	energyEnd: number;
	extraEnergy: number;
	bgIdList: Array<{
		id: number;
	}>;
	weatherRateSN: number;
	weatherList: Array<{
		weatherId: number;
	}>;
	weatherId: number;
	bgmId: number;
	guildanceListZero: Array<{
		guildanceID: number;
	}>;
	isEnemyLvEquilsPlayer: boolean;
	enemyLvOffset: number;
	adaptLvSN: number;
	isCustomDifficulty: boolean;
	extraLevelOffset: number;
	recomGrade: number;
	expelNum: number;
	enemyWaveList: Array<{
		enemyWaveId: number;
	}>;
	bgResUrl: string;
	insZoneBGMId: number;
	bossId: number;
	description: string;
	levelName: string;
	levelChapter: string;
	playerLevel: number;
	playerLevelMax: number;
	specifiedLevelLogical: boolean;
	specifiedLevelList: Array<{
		specifiedLevelId: number;
		specifiedLevelScore?: number;
	}>;
	enemyBookId: number;
	firstPassAward: Array<{
		itemId: number;
		num: number;
	}>;
	perfectAward: any[];
	dropListNew: any[];
	dropTableList: Array<{
		listId: number;
	}>;
	shareList: Array<{
		itemId: number;
		numMax: number;
		numMin: number;
		percent: number;
	}>;
	stageList?: Array<{
		id: number;
		lossHP: number;
	}>;
	equalList?: Array<{
		id?: number;
		num?: number;
	}>;
	maxScore: number;
	maxScoreList: Array<{
		gradeLine: number;
	}>;
	levelRoleList: Array<{
		id: number;
	}>;
	roleNumOffSet: number;
	isUseScript: boolean;
	isUseLevelRole: boolean;
	isAlwaysWin: boolean;
	timeLimit: number;
	paragraphId: number;
	levelBuffList: Array<{
		buffId: number;
	}>;
	mvpType: string;
	minRoleNum?: number;
	characterExp: number;
	playerExp: number;
	time: number;
	difficulty: string;
	rating: number;
	mainBgPath: string;
	pictureList: Array<{
		id: number;
		score: number;
	}>;
	musicList: any[];
	videoList: Array<{
		id: number;
		score: number;
	}>;
	enemyBookList: Array<{
		id: number;
		score: number;
	}>;
	mailList: any[];
	changeCityStateList: Array<{
		id: number;
		state: number;
	}>;
	unlockQuestList?: Array<{
		id: number;
	}>;
	saleLevelType: string;
	levelCoreId: number;
	levelBgType: string;
	levelStar: string;
	reputation: number;
	constructLimit: number;
	cityId: number;
	buildingId: number;
	itemDemand: any[];
	levelDemand: Array<{
		id: number;
		num: number;
	}>;
	CorrespondingList: number;
	sort: number;
	loadingPng: string;
	loadingTips: string;
	rewardCoefficientMax: number;
	rewardCoefficientMin: number;
	caseTimeLimit: number;
	isBanAutoBattle?: boolean;
	correspondingActivity?: number;
	limitBattleType?: string;
	limitNum?: number;
	nextLevel?: number;
	randWaveLimit?: number;
	randWaveMinLimit?: number;
	randWaveList?: Array<{
		waveListId: number;
	}>;
}>