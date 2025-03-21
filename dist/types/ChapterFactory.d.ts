export type ChapterFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	resUrl: string;
	saveProgress: boolean;
	pathList: any[];
	levelChainList: any[];
	mainPath: string;
	backgroundPath: string;
	stageInfoList: Array<{
		chapterIndexDes: string;
		index: number;
		indexDes: string;
		isSpecialLevel: boolean;
		levelId: number;
	}>;
	subLevelList: any[];
	top: number;
	bottom: number;
	left: number;
	right: number;
	mainVideoList: Array<{
		mainVideoPath: string;
	}>;
	mainBgPath: string;
	chapterIndex: number;
	nameCN: string;
	nameEN: string;
	abbreviate: string;
	time: string;
	placeCN: string;
	placeEN: string;
	chapterMapBackground: string;
	spineMarkId: number;
	spinePointId: number;
	rewardlList: any[];
	advList: Array<{
		id: number;
		weight: number;
	}>;
}>