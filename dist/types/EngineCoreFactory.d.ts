export type EngineCoreFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	electricLimit: number;
	coreExpList: Array<{
		effects: string;
		id: number;
		isBreak: boolean;
		num: number;
	}>;
	coreLevelList: Array<{
		grade: number;
		id: number;
		profileId: number;
	}>;
	name: number;
	nameEN: number;
	record: number;
	challengeTips: number;
	mvpNum: number;
	settlementNum: number;
	battleNum: number;
	battleName: number;
	coreIconPath: string;
	coreIconPathW: string;
	breakPath: string;
	informationPath: string;
	breakIconPath: string;
	breakDi1Path: string;
	breakDi2Path: string;
	gradePath: string;
	settlementIconPath: string;
	overviewBgPath: string;
	overviewSelectPath: string;
	color: string;
	upEffects: string;
	breakEffects1: string;
	breakEffects2: string;
	breakEffects3: string;
}>