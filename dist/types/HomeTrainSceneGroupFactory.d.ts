export type HomeTrainSceneGroupFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	skyGroupZ: number;
	skyGroupSpeed: number;
	skyGroup: Array<{
		id: number;
	}>;
	farGroupZ: number;
	farGroupSpeed: number;
	farGroup: any[];
	far2GroupZ: number;
	far2GroupSpeed: number;
	far2Group: any[];
	midGroupZ: number;
	midGroupSpeed: number;
	midGroup: Array<{
		id: number;
	}>;
	mid2GroupZ: number;
	mid2GroupSpeed: number;
	mid2Group: any[];
	roadGroupZ: number;
	roadGroupSpeed: number;
	roadGroup: Array<{
		id: number;
	}>;
	nearGroupZ: number;
	nearGroupSpeed: number;
	nearGroup: any[];
}>