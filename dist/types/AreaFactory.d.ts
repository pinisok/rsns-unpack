export type AreaFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	LineList: Array<{
		id: number;
	}>;
	polluteList: Array<{
		num: number;
		weight: number;
	}>;
	polluteX: number;
	polluteY: number;
	polluteBgList: any[];
	RnWtList: Array<{
		RnWtId: number;
	}>;
	polluteWeatherRate: number;
	polluteWtList: any[];
	polluteLvList: Array<{
		polluteLvMin: number;
		polluteLvOffsetMax: number;
		polluteLvOffsetMin: number;
		polluteLvSN: number;
	}>;
	polluteLevelList: Array<{
		id: number;
		max: number;
		min: number;
	}>;
	ClickLevelList: Array<{
		countInit: number;
		countPollute: number;
		id: number;
		levelLvMax: number;
		levelLvMin: number;
		max: number;
		min: number;
		ratioInit: number;
		ratioPollute: number;
	}>;
	ClickEventPosList: Array<{
		icon_x: number;
		icon_y: number;
		pos_x: number;
		pos_y: number;
		pos_z: number;
	}>;
	ClickEventList: Array<{
		id: number;
		max: number;
		min: number;
		minPolluteLimit: number;
	}>;
	ClickDungeonEventPosList: Array<{
		icon_x: number;
		icon_y: number;
		pos_x: number;
		pos_y: number;
		pos_z: number;
	}>;
	ClickDungeonEventList: Array<{
		id: number;
		max: number;
		min: number;
	}>;
	polluteWuqi: string;
	polluteWuqiList: Array<{
		distance: number;
		name: string;
		pos_x: number;
		pos_y: number;
		pos_z: number;
	}>;
	MapEffectRSS: string;
	MapEffectRSSList: Array<{
		distance: number;
		name: string;
		pos_x: number;
		pos_y: number;
		pos_z: number;
	}>;
}>