export type HomeFurnitureSkinFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	tagList: Array<{
		id: number;
		weight: number;
	}>;
	userMin: number;
	opPosList: Array<{
		actionName?: string;
		horizontalFlip?: boolean;
		offsetX?: number;
		offsetY?: number;
		workOffsetX?: number;
		workOffsetY?: number;
		workOffsetZ?: number;
		actionAfterName1?: string;
		actionAfterName2?: string;
		actionBeforeName1?: string;
		actionBeforeName2?: string;
	}>;
	queueLinePos?: Array<{
		actionName: string;
		horizontalFlip: boolean;
		offsetX: number;
		offsetY: number;
		workOffsetX: number;
		workOffsetY: number;
		workOffsetZ: number;
	}>;
	nextQueueLinePos?: Array<{
		actionName: string;
		horizontalFlip: boolean;
		offsetX: number;
		offsetY: number;
		workOffsetX: number;
		workOffsetY: number;
		workOffsetZ: number;
	}>;
	trainManOpPosList: Array<{
		endOffsetX: number;
		endOffsetY: number;
		horizontalFlip: boolean;
		offsetX: number;
		offsetY: number;
		startOffsetX: number;
		startOffsetY: number;
		workOffsetX: number;
		workOffsetY: number;
		workTree: string;
	}>;
	furnitureHoleList: Array<{
		startX: number;
		startY: number;
		xLength: number;
		yLength: number;
	}>;
	resList: Array<{
		offsetX: number;
		offsetY: number;
		offsetZ: number;
		resPath: string;
		uiSprite?: boolean;
	}>;
	baseResList: Array<{
		offsetX: number;
		offsetY: number;
		offsetZ: number;
		resPath: string;
		uiSprite?: boolean;
	}>;
	furHeight: number;
	furBaseHeight: number;
	pileUpOffsetZ: number;
	creaturePosList: Array<{
		x: number;
		y: number;
		z: number;
	}>;
	animationList?: Array<{
		animationName: string;
		buttonName: string;
		icon: string;
	}>;
	name: string;
	iconPath: string;
	RareType: string;
	tipsPath: string;
	FurnitureSkinDetail: string;
	banswitchAnimation?: boolean;
	SecondiconPath?: string;
	SecondtipsPath?: string;
	specialFurIcon?: boolean;
	PictureUrl?: string;
}>