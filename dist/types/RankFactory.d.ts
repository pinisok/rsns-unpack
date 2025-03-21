export type RankFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	nameEN: string;
	tabName: string;
	rankName: string;
	titlePng: string;
	iconPng: string;
	peopleNum: number;
	rankNumMax: number;
	rankType: string;
	timeType: string;
	sectionType: string;
	gradeSectionList: Array<{
		grade: number;
	}>;
	isInquireArea: boolean;
	activityId?: number;
	topTips?: number;
	statisticsStartTime?: string;
	statisticsEndTime?: string;
}>