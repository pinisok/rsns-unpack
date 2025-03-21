export type UnitStateFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	actionLevel: string;
	viewId: number;
	aniName: string;
	isLoop: boolean;
	aniTime_SN: number;
	totalFrame: number;
	customFrameTag?: string;
	frameChanged?: boolean;
	frameEventList: Array<{
		frameEventId: number;
		hHalf_SN?: number;
		triggerFrame?: number;
		triggerTime_SN?: number;
		wHalf_SN?: number;
		x_SN?: number;
		y_SN?: number;
	}>;
	effectList: Array<{
		effectId: number;
		offsetX?: number;
		offsetY?: number;
		triggerFrame?: number;
		triggerTime_SN?: number;
	}>;
	soundList: Array<{
		soundId: number;
		triggerFrame?: number;
		triggerTime_SN?: number;
	}>;
	isYChange: boolean;
	offsetYList: any[];
	speed_SN: number;
	speedY_SN: number;
	keyFrameList?: Array<{
		keyFrame: number;
		x_SN: number;
		y_SN: number;
	}>;
	isSetSortingOrder?: boolean;
	sortingOrder?: number;
	previousActionList?: Array<{
		actionID: number;
	}>;
}>