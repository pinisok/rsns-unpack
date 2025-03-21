export type ExtractFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	commodityId: number;
	startTime: string;
	endTime: string;
	type: string;
	isNewbie?: boolean;
	costList: Array<{
		count: number;
		id: number;
		num: number;
	}>;
	costTenList: Array<{
		count: number;
		id: number;
		num: number;
	}>;
	freeCD: number;
	closeNum?: number;
	firstReward?: Array<{
		id: number;
		num: number;
	}>;
	secondReward?: Array<{
		id: number;
		num: number;
	}>;
	newNormalList?: Array<{
		id: number;
		weight: number;
		weightVAR: number;
	}>;
	tenList?: Array<{
		id: number;
		num: number;
		weight: number;
	}>;
	extraRewardsList: Array<{
		id: number;
		num: number;
	}>;
	tenSSRMax?: number;
	protectTag: number;
	protectCount: number;
	upList?: Array<{
		id: number;
	}>;
	name?: string;
	sort: number;
	questId?: number;
	imageBg?: string;
	tabName?: string;
	tabPath?: string;
	animName?: string;
	imageList?: Array<{
		image: string;
		scale: number;
		x: number;
		y: number;
	}>;
	titlePath: string;
	titleX: number;
	titleY: number;
	btnList?: Array<{
		id: number;
		x: number;
		y: number;
	}>;
	details?: string;
	tryList?: Array<{
		levelId: number;
		x: number;
		y: number;
	}>;
	spineBg?: string;
	capFirstReward?: any[];
	capsuleList?: any[];
	capTenList?: Array<{
		id: number;
		num: number;
		weight: number;
	}>;
	capProtectList?: Array<{
		id: number;
		num: number;
		weight: number;
	}>;
	protectSectionList?: any[];
	themeName?: string;
	pictureName?: string;
}>